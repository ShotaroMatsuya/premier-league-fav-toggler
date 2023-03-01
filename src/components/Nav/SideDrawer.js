import React from 'react';
import Logo from './Logo';
// import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../UI/Backdrop';
import { NavLink } from 'react-router-dom';

const sideDrawer = (props) => {
  let attachedClasses = ['SideDrawer', 'Close'];
  if (props.open) {
    attachedClasses = ['SideDrawer', 'Open'];
  }

  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <div style={{ height: '30%' }}>
          <Logo />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>
                All Players
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Your Favorites</NavLink>
            </li>
            <li>
              <NavLink to="/ranking">Ranking</NavLink>
            </li>
            <li>
              <NavLink to="/schedule">Schedule</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
