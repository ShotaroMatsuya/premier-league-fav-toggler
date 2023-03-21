/// <reference types="cypress" />
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { mockPlayers } from '../mocks/mockPlayers';
import Favorites from './Favorites';
import './Players.css';

describe('<Favorites />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    const mockReducer = combineReducers({
      player: cy.stub().returns(mockPlayers)
    });
    const store = createStore(mockReducer);
    cy.mount(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );
  });
});
