import React from 'react';
import { useSelector } from 'react-redux';

import ProductItem from '../components/Products/ProductItem';
// import { ProductsContext } from '../context/products-context';

// import { useStore } from '../hooks-store/store';
import './Products.css';

const Products = props => {
  const productList = useSelector(state => state.player.products);

  //get access to context object
  // const productList = useContext(ProductsContext).products;

  // const state = useStore()[0];

  return (
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          name={prod.name}
          nation={prod.nation}
          age={prod.age}
          club={prod.club}
          height_weight={prod.height_weight}
          position={prod.position}
          imageUrl={prod.imageUrl}
          posUrl={prod.posUrl}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
