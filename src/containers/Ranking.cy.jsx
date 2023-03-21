import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import rankingReducer from '../store/reducers/ranking';
import './Players.css';
import Ranking from './Ranking';

const rootReducer = combineReducers({
  ranking: rankingReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));
describe('<Schedule />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Provider store={store}>
        <Ranking />
      </Provider>
    );
  });
});
