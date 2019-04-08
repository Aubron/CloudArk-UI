import React, { Component } from 'react';
import Wrappers from './Wrappers';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Wrappers>
        <Routes />
      </Wrappers>
    );
  }
}

export default App;
