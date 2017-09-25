import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment/commentContainer';
import Sorter from './Sorter/sorterContainer';
import AddComment from './AddComment/addCommentContainer';
import './comments.css';

class Comments extends PureComponent {
  static propTypes = {
    comments: PropTypes.array,
    load: PropTypes.func,
    add: PropTypes.func,
  };

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <div>
        <div className="readable-post-comments-title">
          <span>Comments</span>
          <Sorter />
          <AddComment />
        </div>
        {this.props.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}

export default Comments;
