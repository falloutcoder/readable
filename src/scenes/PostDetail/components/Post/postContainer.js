import { connect } from 'react-redux';
import {
  loadPost,
  removePost,
  updatePost,
  openEditPostModal,
  closeEditPostModal,
} from './actions';
import Post from './post';
import PostContainer from '../../../../components/Post/post';

function mapStateToProps(state) {
  const post = state.scenes.postDetail.post;
  return { post };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    load() {
      dispatch(loadPost(ownProps.id));
    },
    delete() {
      dispatch(removePost(ownProps.id));
    },
    update(body) {
      dispatch(updatePost(ownProps.id, body));
    },
    openEditModal() {
      dispatch(openEditPostModal());
    },
    closeEditModal() {
      dispatch(closeEditPostModal());
    },
  };
}

export default PostContainer(
  connect(mapStateToProps, mapDispatchToProps)(Post),
);
