import {
  START_SC_FETCH,
  SUCCESS_SC_FETCH,
  FAILED_SC_FETCH,
} from '../actions/schedule';

const initState = {
  schedule: null,
  error: false,
  loading: false,
};

const scheduleReducer = (state = initState, action) => {
  switch (action.type) {
    case START_SC_FETCH:
      return { ...state, loading: true };
    case SUCCESS_SC_FETCH:
      return { ...state, loading: false, schedule: action.payload };
    case FAILED_SC_FETCH:
      return {
        ...state,
        loading: false,
        error: true,
        schedule: action.payload,
      };
    default:
      return state;
  }
};
export default scheduleReducer;
