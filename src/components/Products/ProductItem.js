import React from 'react';
import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
// import { ProductsContext } from '../../context/products-context';

// import { useStore } from '../../hooks-store/store';

import './ProductItem.css';
import { toggleFav } from '../../store/actions/products';

const ProductItem = React.memo(props => {
  const dispatch = useDispatch();
  // const toggleFav = useContext(ProductsContext).toggleFav;
  console.log('RENDERING');
  // const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    dispatch(toggleFav(props.id));
    // toggleFav(props.id);
    // dispatch('TOGGLE_FAV', props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.name}</h2>
        <div class="info">
          <img src={props.imageUrl} alt="player" />
          <div class="detail">
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

export default ProductItem;
