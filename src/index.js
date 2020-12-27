import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import productReducer from './store/reducers/products';
// import ProductsProvider from './context/products-context';
// import configureProductsStore from './hooks-store/products-store';

const rootReducer = combineReducers({
  player: productReducer,
});

const store = createStore(rootReducer);

// configureProductsStore();

ReactDOM.render(
  // <ProductsProvider>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  // </ProductsProvider>,
  document.getElementById('root')
);
