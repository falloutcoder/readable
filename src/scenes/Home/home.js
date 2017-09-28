import React, { Component } from 'react';
import Header from './components/Category/categoryContainer';
import Posts from './components/Posts/postsContainer';

class App extends Component {
  render() {
    const selectedCategory = this.props.match.params.category;
    return (
      <div className="App">
        <Header
          selectedCategory={selectedCategory}
          history={this.props.history}
        />
        <Posts selectedCategory={selectedCategory} />
      </div>
    );
  }
}

export default App;
