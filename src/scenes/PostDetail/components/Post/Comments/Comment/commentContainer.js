import { connect } from 'react-redux';
import { upVoteComment, downVoteComment } from './actions';
import Comment from './comment';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    upVote() {
      dispatch(upVoteComment(ownProps.comment.id));
    },
    downVote() {
      dispatch(downVoteComment(ownProps.comment.id));
    },
  };
}

export default connect(null, mapDispatchToProps)(Comment);
