import React from 'react';
import { useSelector } from 'react-redux';

import FavoriteItem from './Favorites/FavoriteItem';

import './Players.css';

const Favorites = (props) => {
  const favoritePlayers = useSelector((state) =>
    state.player.players.filter((p) => p.isFavorite)
  );

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoritePlayers.length > 0) {
    content = (
      <ul className="players-list">
        {favoritePlayers.map((prod) => (
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
