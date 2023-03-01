import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { initRanking } from '../store/actions/ranking';

import Card from '../components/UI/Card';
import Spinner from '../components/UI/Spinner';

const Ranking = (props) => {
  const { setRanking } = props;
  useEffect(() => {
    setRanking();
  }, [setRanking]);
  let rankingChart = null;
  if (props.ranking) {
    rankingChart = props.ranking.map((item, index) => {
      return (
        <tr align="center" key={index}>
          <td>{item.position}</td>
          <td>
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                <img src={item.team.crestUrl} height="24" alt="emblem" />
              </div>
              <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                {item.team.name}
              </div>
            </div>
          </td>
          <td>{item.playedGames}</td>
          <td>{item.won}</td>
          <td>{item.draw}</td>
          <td>{item.lost}</td>
          <td>{item.points}</td>
        </tr>
      );
    });
  }
  let rankingTable = rankingChart ? (
    <Card>
      <table className="ranking">
        <thead>
          <tr align="center">
            <th width="10%">順位</th>
            <th width="40%">クラブ</th>
            <th width="10%">試合</th>
            <th width="10%">勝</th>
            <th width="10%">分</th>
            <th width="10%">負</th>
            <th width="10%">Pts</th>
          </tr>
        </thead>
        <tbody>{rankingChart}</tbody>
      </table>
    </Card>
  ) : (
    <Spinner />
  );

  return rankingTable;
};

const mapStateToProps = (state) => {
  return {
    ranking: state.ranking.payload,
    loading: state.ranking.loading,
    error: state.ranking.error
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setRanking: () => dispatch(initRanking())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
