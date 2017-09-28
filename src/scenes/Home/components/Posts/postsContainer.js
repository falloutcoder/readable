import { connect } from 'react-redux';
import { sortUtil } from '../../../../utils';
import { loadAllPosts, loadAllPostsForCategory } from './actions';
import Posts from './posts';

function mapStateToProps(state) {
  const { all, sorter, editPostModal } = state.scenes.home.posts;
  const posts = all.filter(post => !post.deleted);
  posts.sort(sortUtil(sorter.sortBy === 'date' ? 'timestamp' : 'voteScore'));
  if (sorter.sortOrder === 'descending') {
    posts.reverse();
  }
  return {
    posts: posts,
    editPostModal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadPosts() {
      dispatch(loadAllPosts());
    },
    loadPostsForCategory(category) {
      dispatch(loadAllPostsForCategory(category));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
