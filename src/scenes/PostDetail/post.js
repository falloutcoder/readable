import React, { Component } from 'react';
import Header from '../../components/Header/header'

class PostDetail extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.match.params.id}
      </div>
    );
  }
}

export default PostDetail
