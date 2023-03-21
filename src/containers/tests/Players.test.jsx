import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import playerReducer from '../../store/reducers/players';
import PlayerPage from '../Players';

const rootReducer = combineReducers({
  player: playerReducer
});
const store = createStore(rootReducer);

test('should display 12players', () => {
  render(
    <Provider store={store}>
      <PlayerPage></PlayerPage>
    </Provider>
  );
  const items = screen.getAllByAltText(/player/i);
  expect(items).toHaveLength(12);
});

test('should display 12 images', () => {
  render(
    <Provider store={store}>
      <PlayerPage></PlayerPage>
    </Provider>
  );
  const img = screen.getAllByRole('img');
  expect(img).toHaveLength(12);
});

test('should display 12 toggle button', () => {
  render(
    <Provider store={store}>
      <PlayerPage></PlayerPage>
    </Provider>
  );
  const btn = screen.getAllByRole('button', { name: /Favorite/i });
  expect(btn).toHaveLength(12);
});

test("shouldn't change the text when mouse hovered over", () => {
  render(
    <Provider store={store}>
      <PlayerPage></PlayerPage>
    </Provider>
  );
  const btn = screen.getAllByRole('button')[0];
  userEvent.hover(btn);
  expect(screen.queryByText(/Un-Favorite/)).not.toBeInTheDocument();
});

test('should change the text in button when register as favorite', async () => {
  render(
    <Provider store={store}>
      <PlayerPage></PlayerPage>
    </Provider>
  );
  const btn = screen.getAllByRole('button')[0];
  await userEvent.click(btn);
  expect(screen.getByText(/un-favorite/i)).toBeInTheDocument();
  await userEvent.click(btn);
});

test("shouldn't change the text when mouse hovered over favorite player", async () => {
  render(
    <Provider store={store}>
      <PlayerPage></PlayerPage>
    </Provider>
  );
  const btn = screen.getAllByRole('button')[0];
  await userEvent.click(btn);
  await userEvent.hover(btn);
  expect(screen.getByText(/un-favorite/i)).toBeInTheDocument();
  await userEvent.click(btn);
});

test('should be unregistered when press the button twice', async () => {
  render(
    <Provider store={store}>
      <PlayerPage></PlayerPage>
    </Provider>
  );
  const btn = screen.getAllByRole('button')[0];
  await userEvent.click(btn);
  await userEvent.click(btn);
  expect(screen.queryByText(/un-favorite/i)).not.toBeInTheDocument();
});
