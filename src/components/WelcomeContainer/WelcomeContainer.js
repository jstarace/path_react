import React from 'react';
import classes from './WelcomeContainer.css';
import WelcomeContainerItem from './WelcomeContainerItems/WelcomeContainerItems';
const welcome_container = (props) => {
  return(
    <div className={classes.Welcome_Container}>
      <WelcomeContainerItem type="welcome_greeting"/>
      <WelcomeContainerItem type="welcome_image"/>
    </div>
  );

};

export default welcome_container
