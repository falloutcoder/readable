import React, { PureComponent } from 'react';
import Header from '../../components/Header/header';
import Post from './components/Post/postContainer';

class PostDetail extends PureComponent {
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
