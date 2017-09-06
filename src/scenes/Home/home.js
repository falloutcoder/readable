import React, { Component } from 'react';
import Header from './components/Header/headerContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          Hello World!
        </p>
      </div>
    );
  }
}

export default App;
