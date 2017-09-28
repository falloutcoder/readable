import { connect } from 'react-redux';
import {
  upVotePost,
  downVotePost,
  removePost,
  updatePost,
  openEditPostModal,
  closeEditPostModal,
} from './actions';

function mapDispatchToProps(dispatch, ownProps) {
  const postId = ownProps.id || ownProps.post.id;
  return {
    upVote() {
      dispatch(upVotePost(postId));
    },
    downVote() {
      dispatch(downVotePost(postId));
    },
    delete() {
      dispatch(removePost(postId));
    },
    update(body) {
      dispatch(updatePost(postId, body));
    },
    openEditModal() {
      dispatch(openEditPostModal());
    },
    closeEditModal() {
      dispatch(closeEditPostModal());
    },
  };
}

export default connect(null, mapDispatchToProps);
