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
    const nowDate = new Date();
    const y = nowDate.getFullYear();
    const m = ('00' + (nowDate.getMonth() + 1)).slice(-2);
    const d = ('00' + nowDate.getDate()).slice(-2);
    let dateFrom = y + '-' + m + '-' + d;
    const nextDate = new Date(nowDate.setDate(nowDate.getDate() + 7));
    const ny = nextDate.getFullYear();
    const nm = ('00' + (nextDate.getMonth() + 1)).slice(-2);
    const nd = ('00' + nextDate.getDate()).slice(-2);
    let dateTo = ny + '-' + nm + '-' + nd;
    // console.log(dateFrom, dateTo);
    // let dateTo = '2021-01-01';

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
