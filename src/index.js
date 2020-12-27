import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import productReducer from './store/reducers/products';
import rankingReducer from './store/reducers/ranking';
// import ProductsProvider from './context/products-context';
// import configureProductsStore from './hooks-store/products-store';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  player: productReducer,
  ranking: rankingReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

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
