import React from 'react';
import FavoriteItem from './FavoriteItem';
import './FavoriteItem.css';

describe('<FavoriteItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FavoriteItem />);
  });
});
