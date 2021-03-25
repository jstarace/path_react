import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import WelcomeScreen from './containers/WelcomeScreen/WelcomeScreen'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <WelcomeScreen />
        </Layout>
      </div>
    );
  }
}

export default App;
