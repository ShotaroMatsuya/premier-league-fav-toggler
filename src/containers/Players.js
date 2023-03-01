import React from 'react';
import { useSelector } from 'react-redux';

import PlayerItem from '../components/Players/PlayerItem';

import './Players.css';

const Players = (props) => {
  const PlayerList = useSelector((state) => state.player.players);

  return (
    <ul className="players-list">
      {PlayerList.map((prod) => (
        <PlayerItem
          key={prod.id}
          id={prod.id}
          name={prod.name}
          nation={prod.nation}
          age={prod.age}
          club={prod.club}
          height_weight={prod.height_weight}
          position={prod.position}
          imageUrl={prod.imageUrl}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Players;
