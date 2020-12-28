import axios from 'axios';

//defined action identifier
export const START_FETCH = 'START_FETCH';
export const SUCCESS_FETCH = 'SUCCESS_FETCH';
export const FAILED_FETCH = 'FAILED_FETCH';
//defined action creator
const startFetch = () => {
  return {
    type: START_FETCH,
  };
};
const successFetch = payload => {
  return {
    type: SUCCESS_FETCH,
    payload: payload,
  };
};
const failedFetch = payload => {
  return {
    type: FAILED_FETCH,
    payload: payload,
  };
};

export const initRanking = () => {
  return dispatch => {
    let headers = { 'X-Auth-Token': 'd755ded3f55c41eea77c24a248d5e256' };
    dispatch(startFetch());
    axios
      .get(
        'https://api.football-data.org/v2/competitions/PL/standings?standingType=TOTAL',
        { headers: headers }
      )
      .then(data_PL => {
        dispatch(successFetch(data_PL.data.standings[0].table));
        console.log(data_PL.data.standings[0].table);
      })
      .catch(err => {
        dispatch(failedFetch(err));
        console.log(err);
      });
  };
};
