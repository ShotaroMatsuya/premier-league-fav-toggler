import { START_FETCH, SUCCESS_FETCH, FAILED_FETCH } from '../actions/ranking';

const initialState = {
  payload: null,
  error: false,
  loading: false
};

const rankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCH:
      return { ...state, loading: true };
    case SUCCESS_FETCH:
      return { ...state, loading: false, payload: action.payload };
    case FAILED_FETCH:
      return {
        ...state,
        loading: false,
        error: true,
        payload: action.payload
      };
    default:
      return state;
  }
};

export default rankingReducer;
