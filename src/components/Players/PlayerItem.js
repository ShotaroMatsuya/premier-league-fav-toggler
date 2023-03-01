import React from 'react';
import { useDispatch } from 'react-redux';

import Card from '../UI/Card';

import { toggleFav } from '../../store/actions/players';
import './PlayerItem.css';

const PlayerItem = React.memo((props) => {
  const dispatch = useDispatch();
  console.log('RENDERING');

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
            <p>国籍:{props.nation}</p>
            <p>年齢:{props.age}</p>
            <p>所属:{props.club}</p>
            <p>身長/体重:{props.height_weight}</p>
            <p>ポジション:{props.position}</p>
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
