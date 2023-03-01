import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import DrawerToggle from './DrawerToggle';

import './Navigation.css';

const Navigation = (props) => {
  return (
    <header className="main-header">
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div style={{ height: '80%' }}>
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
    </header>
  );
};

export default Navigation;
