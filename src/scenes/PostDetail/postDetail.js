import React, { Component } from 'react';
import Header from '../../components/Header/header';
import Post from './components/Post/postContainer';

class PostDetail extends Component {
  render() {
    return (
      <div>
        <Header />
        <Post id={this.props.match.params.id} />
      </div>
    );
  }
}

export default PostDetail;
