import React, { useState } from 'react';

import Navigation from '../components/Nav/Navigation';
import SideDrawer from '../components/Nav/SideDrawer';

const Layout = props => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };
  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  return (
    <React.Fragment>
      <Navigation drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={sideDrawerIsVisible} closed={sideDrawerClosedHandler} />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
