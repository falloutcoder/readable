import { connect } from 'react-redux';
import { openNewCommentModal, closeNewCommentModal } from './actions';
import AddComment from './addComment';

function mapStateToProps(state) {
  const { showNewCommentModal } = state.scenes.postDetail.post.comments;
  return { isVisible: showNewCommentModal };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    open() {
      dispatch(openNewCommentModal(ownProps.id));
    },
    close(body) {
      dispatch(closeNewCommentModal(ownProps.id, body));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
