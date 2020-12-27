import axios from 'axios';

export const START_FETCH = 'START_FETCH';

export const SUCCESS_FETCH = 'SUCCESS_FETCH';

export const FAILED_FETCH = 'FAILED_FETCH';

export const startFetch = () => {
  return {
    type: START_FETCH,
  };
};
export const successFetch = payload => {
  return {
    type: SUCCESS_FETCH,
    payload: payload,
  };
};
export const failedFetch = payload => {
  return {
    type: FAILED_FETCH,
    payload: payload,
  };
};

export const initRanking = () => {
  let headers = { 'X-Auth-Token': 'APIKEY' };
  return dispatch => {
    dispatch(startFetch());
    axios
      .get(
        'https://api.football-data.org/v2/competitions/PL/standings?standingType=TOTAL',
        { headers: headers }
      )
      .then(data_PL => {
        dispatch(successFetch(data_PL.standings));
        console.log(data_PL);
        // dispatch(setRanking(data_PL.standings[0].table));
      })
      .catch(err => {
        dispatch(FAILED_FETCH(err));
        console.log(err);
      });
  };
};
