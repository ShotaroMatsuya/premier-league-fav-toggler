import axios from 'axios';

// defined action identifier
export const START_FETCH = 'START_FETCH';
export const SUCCESS_FETCH = 'SUCCESS_FETCH';
export const FAILED_FETCH = 'FAILED_FETCH';
// defined action creator
const startFetch = () => {
  return {
    type: START_FETCH
  };
};
const successFetch = (payload) => {
  return {
    type: SUCCESS_FETCH,
    payload
  };
};
const failedFetch = (payload) => {
  return {
    type: FAILED_FETCH,
    payload
  };
};

export const initRanking = () => {
  return (dispatch) => {
    const headers = { 'X-Auth-Token': process.env.REACT_APP_PL_DATA_TOKEN };
    dispatch(startFetch());
    axios
      .get(
        `${process.env.REACT_APP_PL_DATA_BASE_URL}/competitions/PL/standings?standingType=TOTAL`,
        { headers }
      )
      .then((data_PL) => {
        dispatch(successFetch(data_PL.data.standings[0].table));
        // console.log(data_PL.data.standings[0].table);
      })
      .catch((err) => {
        dispatch(failedFetch(err));
        console.log(err);
      });
  };
};
