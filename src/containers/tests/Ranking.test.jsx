import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import rankingReducer from '../../store/reducers/ranking';
import RankingPage from '../Ranking';
const rootReducer = combineReducers({
  ranking: rankingReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
test('render Standing of PL', async () => {
  render(
    <Provider store={store}>
      <RankingPage />
    </Provider>
  );

  const tableRows = await screen.findAllByRole('row');
  expect(tableRows).toHaveLength(21);
});
