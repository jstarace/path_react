import React from 'react';
import site_logo from '../../Assets/logo.png';
import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={site_logo} alt="yep" />
  </div>
);

export default logo;
