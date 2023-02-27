import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import productReducer from '../../store/reducers/products';
import FavoritesPage from '../Favorites';
test("should display a message instead of Favorites in Favorites cmp if user don't have favorites", () => {
  const rootReducer = combineReducers({
    player: productReducer,
  });
  const store = createStore(rootReducer);

  render(
    <Provider store={store}>
      <FavoritesPage />
    </Provider>
  );
  const placeholder = screen.getByText(/Got no favorites yet!/i);
  expect(placeholder).toBeInTheDocument();
});
