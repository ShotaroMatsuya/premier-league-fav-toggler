import React, { useReducer, useState, useEffect, useCallback } from 'react';

import Card from '../UI/Card';
import Modal from '../UI/Modal';
import Spinner from '../UI/Spinner';
import './FavoriteItem.css';
import axios from 'axios';
import { RAPID_API_HOST, RAPID_API_KEY } from '../../axios';

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return { ...curHttpState, loading: true, error: null };
    case 'OPEN':
      return { ...curHttpState, isModal: true };
    case 'SUCCESS':
      return { ...curHttpState, loading: false };
    case 'ERROR':
      return { loading: false, error: action.errorMessage };
    case 'CLEAR':
      return { ...curHttpState, isModal: false, error: null };
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
  });
  const { id } = props;
  useEffect(() => {
    const headers = {
      'x-rapidapi-key': RAPID_API_KEY,
      'x-rapidapi-host': RAPID_API_HOST,
    };
    dispatchHttp({ type: 'SEND' });
    axios
      .get(
        `https://api-football-beta.p.rapidapi.com/players?id=${id}&season=2020`,
        {
          headers: headers,
        }
      )
      .then(response => {
        dispatchHttp({
          type: 'RESPONSE',
        });

        const stats = response.data.response[0].statistics[0];
        setStatsState(stats);
        console.log(response.data.response[0].statistics[0]);
      })
      .catch(error => {
        dispatchHttp({ type: 'ERROR', errorMessage: error });
      });
  }, [id]);

  let statsDetail;
  const attackStatsHandler = useCallback(() => {
    dispatchHttp({ type: 'OPEN' });
  }, []);
  const defenseStatsHandler = useCallback(() => {
    dispatchHttp({ type: 'OPEN' });
  }, []);
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
  let attackResults = (
    <table>
      <thead>
        <tr>
          <th>Shots</th>
          <th>Shots on target</th>
          <th>Pass accuracy</th>
          <th>Key Passes</th>
          <th>Dribble Success</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{statsState.shots.total}</td>
          <td>{statsState.shots.on}</td>
          <td>{statsState.passes.accuracy}</td>
          <td>{statsState.passes.key}</td>
          <td>
            {(+statsState.dribbles.success / +statsState.dribbles.attempts) *
              100}
            %
          </td>
        </tr>
      </tbody>
    </table>
  );
  let defenceResults = (
    <table>
      <thead>
        <tr>
          <th>Interceptions</th>
          <th>Tackles</th>
          <th>Blocks</th>
          <th>Duel Won</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{statsState.tackles.interceptions}</td>
          <td>{statsState.tackles.total}</td>
          <td>{statsState.tackles.blocks}</td>
          <td>{(+statsState.duel.won / +statsState.duel.total) * 100}%</td>
        </tr>
      </tbody>
    </table>
  );
  return (
    <React.Fragment>
      {httpState.isModal && (
        <Modal show={httpState.isModal} modalClosed={closeModalHandler}>
          {/* {httpState.loading ? <Spinner /> : null} */}
          {/* {statsState && statsState.player_name} */}
          {/* {httpState.error ? httpState.error : null} */}
        </Modal>
      )}
      <Card style={{ marginBottom: '1rem' }}>
        <div className="favorite-item">
          <h1>{props.name}</h1>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <img
              style={{ width: '25%' }}
              src={props.imageUrl}
              alt="fav-player"
            />
            <div style={{ width: '50%' }}>
              <h2 style={{ fontSize: '1.2rem' }}>Top Stats</h2>
              <div className="topStatList">
                <div className="topStat">
                  <span className="stat">
                    Appearances
                    <span className="allStatContainer">
                      {statsState ? statsState.games.appearences : <Spinner />}
                    </span>
                  </span>
                </div>
                <div className="topStat">
                  <span className="stat">
                    Minutes
                    <span className="allStatContainer">
                      {statsState ? statsState.games.minutes : <Spinner />}
                    </span>
                  </span>
                </div>
                <div className="topStat">
                  <span className="stat">
                    {statsState && props.position !== 'Goalkeeper'
                      ? 'Goal'
                      : 'Save'}

                    <span className="allStatContainer">
                      {statsState ? statsColumn3 : <Spinner />}
                    </span>
                  </span>
                </div>
                <div className="topStat">
                  <span className="stat">
                    {statsState && props.position !== 'Goalkeeper'
                      ? 'Assist'
                      : 'Conceded'}
                    <span className="allStatContainer">
                      {statsState ? statsColumn4 : <Spinner />}
                    </span>
                  </span>
                </div>
              </div>
              <button onClick={attackStatsHandler} style={{ margin: '1.2rem' }}>
                攻撃stats
              </button>
              <button
                onClick={defenseStatsHandler}
                style={{ margin: '1.2rem' }}
              >
                守備stats
              </button>
            </div>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default FavoriteItem;
