import {
  CLEAR_MODAL,
  FAILED_SC_FETCH,
  START_SC_FETCH,
  SUCCESS_SC_FETCH
} from '../actions/schedule';

const initState = {
  schedule: null,
  error: false,
  loading: false
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
        schedule: action.payload
      };
    case CLEAR_MODAL:
      return {
        ...state,
        loading: true,
        error: false,
        schedule: null
      };
    default:
      return state;
  }
};
export default scheduleReducer;
