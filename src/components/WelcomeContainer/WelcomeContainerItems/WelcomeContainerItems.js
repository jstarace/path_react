import React from 'react';
import classes from './WelcomeContainerItem.css';

const welcomeContainerItem = (props) => {
  let item = null;

  switch(props.type){
    case('welcome_image'):
      item = (
        <div className={classes.Welcome_Image}>
            //Insert the image <img src...>
        </div>
      );
      break;
    case('welcome_greeting'):
      item = (
        <div className={classes.Welcome_Greeting}>
          Welcome!!!
        </div>
        <div className={classes.Welcome_message}>
          hmmmm
        </div>
      );
      break;
    default:
      item = null;
  }

  return item;
};

export default welcomeContainerItem;
