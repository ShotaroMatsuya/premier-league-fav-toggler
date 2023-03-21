import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import rankingReducer from '../../store/reducers/ranking';
import RankingPage from '../Ranking';

const rootReducer = combineReducers({
  ranking: rankingReducer
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

test('should displayed 20 teams logo imgs', () => {
  render(
    <Provider store={store}>
      <RankingPage />
    </Provider>
  );

  const imgs = screen.getAllByAltText(/emblem/i);
  expect(imgs).toHaveLength(20);
});

test('should have 7 columns in the table', () => {
  render(
    <Provider store={store}>
      <RankingPage />
    </Provider>
  );
  const th = screen.getAllByRole('columnheader');
  expect(th).toHaveLength(7);
});
