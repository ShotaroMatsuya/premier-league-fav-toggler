import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import scheduleReducer from '../../store/reducers/schedule';
import SchedulePage from '../Schedule';

const rootReducer = combineReducers({
  schedule: scheduleReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

test('render Schedule Table of PL', async () => {
  render(
    <Provider store={store}>
      <SchedulePage />
    </Provider>
  );

  await waitFor(async () => {
    const tableRows = await screen.findAllByRole('row');
    expect(tableRows).toHaveLength(13);
  });
});

test('should have 3 columns in the table', () => {
  render(
    <Provider store={store}>
      <SchedulePage />
    </Provider>
  );
  const tableColumns = screen.getAllByRole('columnheader');
  expect(tableColumns).toHaveLength(3);
});
