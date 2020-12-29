import React from 'react';
import { useSelector } from 'react-redux';

import FavoriteItem from './Favorites/FavoriteItem';
// import { ProductsContext } from '../context/products-context';
// import { useStore } from '../hooks-store/store';

import './Products.css';

const Favorites = props => {
  const favoriteProducts = useSelector(state =>
    state.player.products.filter(p => p.isFavorite)
  );
  // const favoriteProducts = useContext(ProductsContext).products.filter(
  //   p => p.isFavorite
  // );
  // const state = useStore()[0];
  // const favoriteProducts = state.products.filter(p => p.isFavorite);

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            name={prod.name}
            imageUrl={prod.imageUrl}
            position={prod.position}
            stats={null}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
