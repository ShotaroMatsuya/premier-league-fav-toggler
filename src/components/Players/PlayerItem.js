import React from 'react';
import { useDispatch } from 'react-redux';

import Card from '../UI/Card';

import { toggleFav } from '../../store/actions/players';
import './PlayerItem.css';

const PlayerItem = React.memo(function Cmp(props) {
  const dispatch = useDispatch();

  const toggleFavHandler = () => {
    dispatch(toggleFav(props.id));
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="player-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.name}</h2>
        <div className="info">
          <img src={props.imageUrl} alt="player" />
          <div className="detail">
            <p>Nation:{props.nation}</p>
            <p>Age:{props.age}</p>
            <p>Club:{props.club}</p>
            <p>Height/Weight:{props.height_weight}</p>
            <p>Position:{props.position}</p>
            <button
              className={!props.isFav ? 'button-outline' : ''}
              onClick={toggleFavHandler}
            >
              {props.isFav ? 'Un-Favorite' : 'Favorite'}
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
});

export default PlayerItem;
