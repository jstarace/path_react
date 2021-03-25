import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class WelcomeScreen extends Component{
  render(){
    return(
      <Auxiliary>
        <div>Welcome Image Here</div>
        <div>
          <h1>Greeting</h1>
          <p>Welcome message</p>
        </div>
      </Auxiliary>
    );
  }
}

export default WelcomeScreen;
