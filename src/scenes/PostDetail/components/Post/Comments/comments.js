import React, { PureComponent } from 'react';
import Comment from './Comment/comment';
import Sorter from './Sorter/sorterContainer';
import './comments.css';

class Comments extends PureComponent {
  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <div>
        <div className="readable-post-comments-title">
          <span>Comments</span>
          <Sorter />
        </div>
        {this.props.comments &&
          this.props.comments.map(comment => (
            <Comment comment={comment} key={comment.id} />
          ))}
      </div>
    );
  }
}

export default Comments;
