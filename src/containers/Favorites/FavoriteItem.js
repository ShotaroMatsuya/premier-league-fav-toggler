import React, { useReducer, useState, useEffect, useCallback } from 'react';

import Card from '../../components/UI/Card';
import Modal from '../../components/UI/Modal';
import Spinner from '../../components/UI/Spinner';
import './FavoriteItem.css';
import axios from 'axios';
import { RAPID_API_HOST, RAPID_API_KEY } from '../../axios';

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return { ...curHttpState, loading: true, error: null, stats: null };
    case 'OPEN':
      return { ...curHttpState, isModal: true, stats: action.payload };
    case 'SUCCESS':
      return { ...curHttpState, loading: false };
    case 'ERROR':
      return {
        ...curHttpState,
        isModal: true,
        loading: false,
        error: action.errorMessage,
      };
    case 'CLEAR':
      return { ...curHttpState, isModal: false, error: null, stats: null };
    default:
      return curHttpState;
  }
};
const FavoriteItem = props => {
  const [statsState, setStatsState] = useState(null);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    isModal: false,
    error: null,
    stats: null,
  });

  const { id } = props;
  useEffect(() => {
    const headers = {
      'x-rapidapi-key': RAPID_API_KEY,
      'x-rapidapi-host': RAPID_API_HOST,
    };
    if (httpState.error === null) {
      dispatchHttp({ type: 'SEND' });
      axios
        .get(
          `https://api-football-beta.p.rapidapi.com/players?id=${id}&season=2021`,
          {
            headers: headers,
          }
        )
        .then(response => {
          console.log('AXIOS WORKING');
          dispatchHttp({
            type: 'RESPONSE',
          });
          const stats = response.data.response[0].statistics[0];
          setStatsState(stats);
          console.log(response.data.response[0].statistics[0]);
        })
        .catch(error => {
          console.log('AXIOS FETCHING ERROR');
          dispatchHttp({ type: 'ERROR', errorMessage: error });
        });
    }
  }, [id, httpState.error]);

  let attackResults;
  let defenceResults;
  if (statsState) {
    attackResults = (
      <React.Fragment>
        <h1>攻撃stats</h1>
        <table className="stats attack" style={{ margin: '0 auto' }}>
          <thead>
            <tr align="center">
              <th>Shots</th>
              <th>Shots on target</th>
              <th>Pass accuracy</th>
              <th>Key Passes</th>
              <th>Dribble Success</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{statsState.shots.total || 0}</td>
              <td>{statsState.shots.on || 0}</td>
              <td>{statsState.passes.accuracy || 0}</td>
              <td>{statsState.passes.key || 0}</td>
              <td>
                {(
                  (+statsState.dribbles.success /
                    +statsState.dribbles.attempts) *
                  100
                ).toFixed(2, '0') || 0}
                %
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
    defenceResults = (
      <React.Fragment>
        <h1>守備stats</h1>
        <table className="stats defence" style={{ margin: '0 auto' }}>
          <thead>
            <tr align="center">
              <th>Interceptions</th>
              <th>Tackles</th>
              <th>Blocks</th>
              <th>Duel Won</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{statsState.tackles.interceptions || 0}</td>
              <td>{statsState.tackles.total || 0}</td>
              <td>{statsState.tackles.blocks || 0}</td>
              <td>
                {(
                  (+statsState.duels.won / +statsState.duels.total) *
                  100
                ).toFixed(2, '0') || 0}
                %
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  const attackStatsHandler = () => {
    dispatchHttp({ type: 'OPEN', payload: attackResults });
  };
  const defenseStatsHandler = () => {
    dispatchHttp({ type: 'OPEN', payload: defenceResults });
  };
  const closeModalHandler = useCallback(() => {
    dispatchHttp({ type: 'CLEAR' });
  }, []);
  let statsColumn3 = '';
  let statsColumn4 = '';
  if (statsState && props.position !== 'Goalkeeper') {
    statsColumn3 = statsState.goals.total;
    statsColumn4 = statsState.goals.assists;
  } else if (statsState && props.position === 'Goalkeeper') {
    statsColumn3 = statsState.goals.conceded;
    statsColumn4 = statsState.goals.saves;
  }
  let rating;
  let colors = '';
  if (statsState) {
    rating = +statsState.games.rating;
    if (rating < 5.5) {
      colors = 'black';
    } else if (rating < 6) {
      colors = 'blue';
    } else if (rating < 6.5) {
      colors = 'limegreen';
    } else if (rating < 7) {
      colors = 'orange';
    } else {
      colors = 'red';
    }
  }

  return (
    <React.Fragment>
      {httpState.isModal && httpState.error === null ? (
        <Modal show={httpState.isModal} modalClosed={closeModalHandler}>
          {/* {httpState.loading ? <Spinner /> : null} */}
          {httpState.stats}
        </Modal>
      ) : null}
      {httpState.error && (
        <Modal show modalClosed={closeModalHandler}>
          <p
            style={{
              fontWeight: 'bold',
              lineHeight: '2',
              letterSpacing: '1.2px',
              fontSize: '1.2rem',
            }}
          >
            一日のリクエストの上限(100)に達しました。翌日お試しください。
            <br />
            なお、ランキングと日程情報はご利用いただけます。
          </p>

          <a href="/">
            <button>Topに戻る</button>
          </a>
        </Modal>
      )}
      <Card style={{ marginBottom: '1rem' }}>
        <div className="favorite-item">
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <h1 className="player-name">{props.name}</h1>
            <div className="player-rate">
              <p>Rating</p>
              <p
                className="numbers"
                style={{
                  color: colors,
                }}
              >
                {statsState ? rating.toFixed(2) : <Spinner />}
              </p>
            </div>
          </div>
          <div className="player-info">
            <img
              className="player-image"
              src={props.imageUrl}
              alt="fav-player"
            />
            <div className="player-stats">
              <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>
                Top Stats
              </h2>
              <div className="topStatList">
                <div className="topStat">
                  <span className="stat">
                    出場試合
                    <span className="allStatContainer">
                      {statsState ? (
                        statsState.games.appearences || 0
                      ) : (
                        <Spinner />
                      )}
                    </span>
                  </span>
                </div>
                <div className="topStat">
                  <span className="stat">
                    出場時間
                    <span className="allStatContainer">
                      {statsState ? statsState.games.minutes || 0 : <Spinner />}
                    </span>
                  </span>
                </div>
                <div className="topStat">
                  <span className="stat">
                    {statsState && props.position !== 'Goalkeeper'
                      ? 'ゴール数'
                      : 'セーブ数'}

                    <span className="allStatContainer">
                      {statsState ? statsColumn3 || 0 : <Spinner />}
                    </span>
                  </span>
                </div>
                <div className="topStat">
                  <span className="stat">
                    {statsState && props.position !== 'Goalkeeper'
                      ? 'アシスト'
                      : '失点数'}
                    <span className="allStatContainer">
                      {statsState ? statsColumn4 || 0 : <Spinner />}
                    </span>
                  </span>
                </div>
              </div>
              <button onClick={attackStatsHandler} style={{ margin: '1.2rem' }}>
                攻撃データ
              </button>
              <button
                onClick={defenseStatsHandler}
                style={{ margin: '1.2rem' }}
              >
                守備データ
              </button>
            </div>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default FavoriteItem;
