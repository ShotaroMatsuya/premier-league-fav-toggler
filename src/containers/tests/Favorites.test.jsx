import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import productReducer from '../../store/reducers/players';
import FavoritesPage from '../Favorites';

const rootReducer = combineReducers({
  player: productReducer
});
const store = createStore(rootReducer);

test("should display a message instead of Favorites in Favorites cmp if user don't have favorites", () => {
  render(
    <Provider store={store}>
      <FavoritesPage />
    </Provider>
  );
  const placeholder = screen.getByText(/Got no favorites yet!/i);
  expect(placeholder).toBeInTheDocument();
});
