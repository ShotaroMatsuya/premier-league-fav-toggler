import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import playerReducer from '../store/reducers/players';
import Players from './Players';
import './Players.css';

const rootReducer = combineReducers({
  player: playerReducer
});
const store = createStore(rootReducer);

describe('<Players />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Provider store={store}>
        <Players></Players>
      </Provider>
    );
  });
});
