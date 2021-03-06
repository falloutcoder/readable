import { connect } from 'react-redux';
import { loadPost } from './actions';
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
  };
}

export default PostContainer(
  connect(mapStateToProps, mapDispatchToProps)(Post),
);
