import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import scheduleReducer from '../../store/reducers/schedule';
import SchedulePage from '../Schedule';
import MockDate from 'mockdate';

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
    expect(tableRows).toHaveLength(14);
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

test("should display modal if matches don't exist in a week", async () => {
  MockDate.set('2023-07-27');
  render(
    <Provider store={store}>
      <SchedulePage />
    </Provider>
  );
  await waitFor(async () => {
    const modal = screen.getByTestId('notfound-modal');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent('1週間以内に試合がありません。');
  });
});

test('should display modal if api call return error', async () => {
  const mockReducer = combineReducers({
    schedule: jest
      .fn()
      .mockReturnValue({ loading: false, error: true, schedule: null })
  });
  const mockStore = createStore(mockReducer, applyMiddleware(thunk));
  render(
    <Provider store={mockStore}>
      <SchedulePage />
    </Provider>
  );
  await waitFor(async () => {
    const modal = screen.getByTestId('error-modal');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent('リクエストに失敗しました');
  });
});
