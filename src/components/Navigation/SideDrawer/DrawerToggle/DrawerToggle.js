import React from 'react';
import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
  <div className={classes.MobileOnly} onClick={props.clicked}>
    <h3>MENU</h3>
  </div>
);

export default drawerToggle;
