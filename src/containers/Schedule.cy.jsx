import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import scheduleReducer from '../store/reducers/schedule';
import './Players.css';
import Schedule from './Schedule';

const rootReducer = combineReducers({
  schedule: scheduleReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));
describe('<Schedule />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Provider store={store}>
        <Schedule />
      </Provider>
    );
  });
});
