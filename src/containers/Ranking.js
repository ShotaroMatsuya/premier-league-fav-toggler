import React from 'react';

import { connect } from 'react-redux';
import { initRanking } from '../store/actions/ranking';

const Ranking = props => {
  return (
    <React.Fragment>
      {props.ranking}
      <button onClick={props.setRanking}>CLICK!</button>;
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    ranking: state.ranking.payload,
    loading: state.ranking.loading,
    error: state.ranking.error,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setRanking: () => dispatch(initRanking()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
