import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () =>(
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>About</NavigationItem>
      <NavigationItem link="/">Resume and CV</NavigationItem>
      <NavigationItem link="/">Projects</NavigationItem>
      <NavigationItem link="/">Contact</NavigationItem>
      <NavigationItem link="/">Login</NavigationItem>
      <NavigationItem link="/">Register</NavigationItem>
    </ul>
)

export default navigationItems;
