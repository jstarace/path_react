import React, { Component } from 'react';
import classes from './WelcomeContainerItems.css';
import PropTypes from 'prop-types';
import home from '../../../Assets/homepage.jpg';

class WelcomeContainerItem extends Component {
  render() {
    let item = null;

    switch(this.props.type){
      case('welcome_image'):
        item = (
          <div className={classes.Welcome_Image_Container}>
            <img className={classes.Welcome_Image} src={home}/>
          </div>
        );
        break;
      case('welcome_greeting'):
        item = (
            <article className={classes.Welcome_Greeting}>
              <h2>Welcome!!!!</h2>
              <p>Hello again!  I see that you've chosen to go the React Route.  This path of the website is React through and throught which is relatively new to me, though I like the break down and organization of things.  Not exactly sure how react handles db connections yet so I'll update later.  If you have any questions please feel free to click 'Contact' link above and drop me an email.  While you're here please check out some of my other work and/or view/download my resume or CV.</p>
              <p> Thank you,</p>
              <p> Jason Starace</p>
            </article>
        );
        break;
      default:
        item = null;
    }
    return item;
  }
}

WelcomeContainerItem.propTypes = {
  type: PropTypes.string.isRequired
};

export default WelcomeContainerItem;
