import { connect } from 'react-redux';
import { sortUtil } from '../../../../utils';
import { loadAllPosts, loadAllPostsForCategory } from './actions';
import Posts from './posts';

function mapStateToProps(state) {
  const categories = state.scenes.home.categories;
  const selectedCategory = categories.all[categories.selected];
  const { all, sorter } = state.scenes.home.posts;
  const posts = all.filter(post => !post.deleted);
  posts.sort(sortUtil(sorter.sortBy === 'date' ? 'timestamp' : 'voteScore'));
  if (sorter.sortOrder === 'descending') {
    posts.reverse();
  }
  return {
    posts: posts,
    selectedCategory: selectedCategory && selectedCategory.name,
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
