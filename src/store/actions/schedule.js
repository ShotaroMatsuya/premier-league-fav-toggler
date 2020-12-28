import axios from 'axios';

//defined action identifier
export const START_SC_FETCH = 'START_SC_FETCH';
export const SUCCESS_SC_FETCH = 'SUCCESS_SC_FETCH';
export const FAILED_SC_FETCH = 'FAILED_SC_FETCH';
//defined action creator
const startScFetch = () => {
  return { type: START_SC_FETCH };
};
const successScFetch = payload => {
  return { type: SUCCESS_SC_FETCH, payload: payload };
};
const failedScFetch = payload => {
  return { type: FAILED_SC_FETCH, payload: payload };
};
export const setSchedule = () => {
  return dispatch => {
    let headers = { 'X-Auth-Token': 'd755ded3f55c41eea77c24a248d5e256' };
    let dateFrom = '2020-12-28';
    let dateTo = '2021-01-04';
    dispatch(startScFetch());

    axios
      .get(
        `https://api.football-data.org/v2/competitions/PL/matches?status=SCHEDULED&dateFrom=${dateFrom}&dateTo=${dateTo}`,
        { headers: headers }
      )
      .then(data_PL => {
        dispatch(successScFetch(data_PL));
        // console.log('success' + data_PL);
      })
      .catch(error => {
        dispatch(failedScFetch(error));
        console.log('error' + error);
      });
  };
};
