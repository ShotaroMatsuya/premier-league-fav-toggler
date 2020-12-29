import React from 'react';

import premierLogo from '../../assets/Images/premier-logo.png';
import './Logo.css';

const logo = props => (
  <div className="Logo" style={{ height: props.height }}>
    <img src={premierLogo} alt="PremierLeagueLogo" />
  </div>
);

export default logo;
