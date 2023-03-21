import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { mockPlayers } from '../../mocks/mockPlayers';
import { mockStats } from '../../mocks/mockStats';
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

test('should be correctValue in score area(1)', async () => {
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
    const totalRating = screen.getByTestId('total-rating');
    const expectedValue = Number(
      mockStats[0].response[0].statistics[0].games.rating
    ).toFixed(2);
    expect(totalRating).toHaveTextContent(expectedValue);
  });
});

test('should be correctValue in score area(2)', async () => {
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
    const appearanceCount = screen.getByTestId('appearance-count');
    const expectedValue =
      mockStats[1].response[0].statistics[0].games.appearences;
    expect(appearanceCount).toHaveTextContent(expectedValue);
  });
});

test('should be correctValue in score area(3)', async () => {
  // mock function
  const mockState = JSON.parse(JSON.stringify(mockPlayers));
  mockState.players[5].isFavorite = true;
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
    const appearanceCount = screen.getByTestId('appearance-time');
    const expectedValue = mockStats[2].response[0].statistics[0].games.minutes;
    expect(appearanceCount).toHaveTextContent(expectedValue);
  });
});

test('should display the detailed attacking stats table when click the button', async () => {
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
  const attackStatsBtn = screen.getByRole('button', {
    name: '攻撃データ'
  });
  await waitFor(async () => {
    await userEvent.click(attackStatsBtn);
    expect(
      screen.getByRole('heading', { name: '攻撃stats' })
    ).toBeInTheDocument();
  });
});

test('should display the detailed defensive stats table when clicking', async () => {
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
  const defenceStatsBtn = screen.getByRole('button', {
    name: '守備データ'
  });
  await waitFor(async () => {
    await userEvent.click(defenceStatsBtn);
    expect(
      screen.getByRole('heading', { name: '守備stats' })
    ).toBeInTheDocument();
  });
});

test('should show the modal when api call exceed the limitation', async () => {
  // mock function
  const mockState = JSON.parse(JSON.stringify(mockPlayers));
  mockState.players[7].isFavorite = true;
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
    const modal = await screen.getByTestId('error-modal');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent(
      '一日のリクエストの上限(100)に達しました。翌日お試しください。'
    );
  });
});
