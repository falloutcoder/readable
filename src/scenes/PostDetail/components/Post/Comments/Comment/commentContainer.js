import { connect } from 'react-redux';
import {
  upVoteComment,
  downVoteComment,
  removeComment,
  openEditCommentModal,
  closeEditCommentModal,
} from './actions';
import Comment from './comment';

function mapStateToProps(state, ownProps) {
  const { editCommentModal } = state.scenes.postDetail.post.comments;
  return { isEditMode: editCommentModal === ownProps.comment.id };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    upVote() {
      dispatch(upVoteComment(ownProps.comment.id));
    },
    downVote() {
      dispatch(downVoteComment(ownProps.comment.id));
    },
    delete() {
      dispatch(removeComment(ownProps.comment.id));
    },
    openEditModal() {
      dispatch(openEditCommentModal(ownProps.comment.id));
    },
    closeEditModal() {
      dispatch(closeEditCommentModal());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
