import React, { Component } from 'react';
import Header from './components/Header/headerContainer'
import Posts from './components/Posts/postsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Posts />
      </div>
    );
  }
}

export default App;
