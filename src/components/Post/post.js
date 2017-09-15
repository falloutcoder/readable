import { connect } from 'react-redux';
import { upVotePost, downVotePost } from './actions';

function mapDispatchToProps(dispatch, ownProps) {
  const postId = ownProps.id || ownProps.post.id;
  return {
    upVote() {
      dispatch(upVotePost(postId));
    },
    downVote() {
      dispatch(downVotePost(postId));
    },
  };
}

export default connect(null, mapDispatchToProps);
