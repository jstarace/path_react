import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import WelcomeContainer from '../../components/WelcomeContainer/WelcomeContainer';
import Modal from '../../components/UI/Modal/Modal';

class WelcomeScreen extends Component{
  render(){
    return(
      <Auxiliary>
        <Modal />
        <WelcomeContainer />
      </Auxiliary>
    );
  }
}

export default WelcomeScreen;
