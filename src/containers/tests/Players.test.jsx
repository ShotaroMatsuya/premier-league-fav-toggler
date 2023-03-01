import { render, screen } from '@testing-library/react';
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
