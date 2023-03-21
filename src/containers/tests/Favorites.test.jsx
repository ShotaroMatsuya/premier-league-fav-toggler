import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { mockPlayers } from '../../mocks/mockPlayers';
import FavoritesPage from '../Favorites';

test("should display a message instead of Favorites in Favorites cmp if user don't have favorites", () => {
  const mockReducer = combineReducers({
    player: jest.fn().mockReturnValue(mockPlayers)
  });
  const store = createStore(mockReducer);
  render(
    <Provider store={store}>
      <FavoritesPage />
    </Provider>
  );
  const placeholder = screen.getByText(/Got no favorites yet!/i);
  expect(placeholder).toBeInTheDocument();
});

test('should display one image of player which is marked as favorite', async () => {
  // mock function
  const mockState = JSON.parse(JSON.stringify(mockPlayers));
  mockState.players[0].isFavorite = true;
  const mockReducer = combineReducers({
    player: jest.fn().mockReturnValue(mockState)
  });
  const mockStore = createStore(mockReducer);

  render(
    <Provider store={mockStore}>
      <FavoritesPage />
    </Provider>
  );
  await waitFor(async () => {
    const favPlayer = screen.getAllByAltText(/fav-player/i);
    expect(favPlayer).toBeTruthy();
    expect(favPlayer).toHaveLength(1);
  });
});

test('should display two images of players which is marked as favorite twice', async () => {
  // mock function
  const mockState = JSON.parse(JSON.stringify(mockPlayers));
  mockState.players[0].isFavorite = true;
  mockState.players[1].isFavorite = true;
  const mockReducer = combineReducers({
    player: jest.fn().mockReturnValue(mockState)
  });
  const mockStore = createStore(mockReducer);

  render(
    <Provider store={mockStore}>
      <FavoritesPage />
    </Provider>
  );
  await waitFor(async () => {
    const favPlayer = screen.getAllByAltText(/fav-player/i);
    expect(favPlayer).toBeTruthy();
    expect(favPlayer).toHaveLength(2);
  });
});

test('should display correct attributes for field players', async () => {
  // mock function
  const mockState = JSON.parse(JSON.stringify(mockPlayers));
  mockState.players[0].isFavorite = true;
  const mockReducer = combineReducers({
    player: jest.fn().mockReturnValue(mockState)
  });
  const mockStore = createStore(mockReducer);

  render(
    <Provider store={mockStore}>
      <FavoritesPage />
    </Provider>
  );
  await waitFor(async () => {
    const totalRate = screen.getByText('Rating');
    expect(totalRate).toBeInTheDocument();
    const appearanceCount = screen.getByText('出場試合');
    expect(appearanceCount).toBeInTheDocument();
    const totalTime = screen.getByText('出場時間');
    expect(totalTime).toBeInTheDocument();
    const goalCount = screen.getByText('ゴール数');
    expect(goalCount).toBeInTheDocument();
    const assistCount = screen.getByText('アシスト');
    expect(assistCount).toBeInTheDocument();
  });
});

test('should display correct attributes for goal keepers', async () => {
  // mock function
  const mockState = JSON.parse(JSON.stringify(mockPlayers));
  mockState.players[2].isFavorite = true;
  const mockReducer = combineReducers({
    player: jest.fn().mockReturnValue(mockState)
  });
  const mockStore = createStore(mockReducer);

  render(
    <Provider store={mockStore}>
      <FavoritesPage />
    </Provider>
  );
  await waitFor(async () => {
    const totalRate = screen.getByText('Rating');
    expect(totalRate).toBeInTheDocument();
    const appearanceCount = screen.getByText('出場試合');
    expect(appearanceCount).toBeInTheDocument();
    const totalTime = screen.getByText('出場時間');
    expect(totalTime).toBeInTheDocument();
    const goalCount = screen.getByText('セーブ数');
    expect(goalCount).toBeInTheDocument();
    const assistCount = screen.getByText('失点数');
    expect(assistCount).toBeInTheDocument();
  });
});
