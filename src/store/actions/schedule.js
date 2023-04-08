import axios from 'axios';

// defined action identifier
export const START_SC_FETCH = 'START_SC_FETCH';
export const SUCCESS_SC_FETCH = 'SUCCESS_SC_FETCH';
export const FAILED_SC_FETCH = 'FAILED_SC_FETCH';
export const CLEAR_MODAL = 'CLEAR_MODAL';
// defined action creator
const startScFetch = () => {
  return { type: START_SC_FETCH };
};
const successScFetch = (payload) => {
  return { type: SUCCESS_SC_FETCH, payload };
};
const failedScFetch = (payload) => {
  return { type: FAILED_SC_FETCH, payload };
};
const clearErrorModal = (payload) => {
  return { type: CLEAR_MODAL, payload };
};

export const clearModal = () => {
  return (dispatch) => {
    dispatch(clearErrorModal());
  };
};

export const setSchedule = () => {
  return (dispatch) => {
    const headers = {
      'X-Auth-Token': process.env.REACT_APP_PL_DATA_TOKEN
    };
    const nowDate = new Date();
    const y = nowDate.getFullYear();
    const m = ('00' + (nowDate.getMonth() + 1)).slice(-2);
    const d = ('00' + nowDate.getDate()).slice(-2);
    const dateFrom = y + '-' + m + '-' + d;
    const nextDate = new Date(nowDate.setDate(nowDate.getDate() + 7));
    const ny = nextDate.getFullYear();
    const nm = ('00' + (nextDate.getMonth() + 1)).slice(-2);
    const nd = ('00' + nextDate.getDate()).slice(-2);
    const dateTo = ny + '-' + nm + '-' + nd;
    // let dateTo = '2021-01-01';

    dispatch(startScFetch());

    axios
      .get(
        `${process.env.REACT_APP_PL_DATA_BASE_URL}/competitions/PL/matches?status=SCHEDULED&dateFrom=${dateFrom}&dateTo=${dateTo}`,
        { headers }
      )
      .then((data_PL) => {
        dispatch(successScFetch(data_PL));
      })
      .catch((error) => {
        dispatch(failedScFetch(error));
      });
  };
};
