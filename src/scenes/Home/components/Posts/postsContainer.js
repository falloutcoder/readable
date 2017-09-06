import { connect } from 'react-redux'
import { loadAllPosts, loadAllPostsForCategory } from './actions'
import Posts from './posts'

function mapStateToProps(state) {
  const selectedCategory = state.data.categories.all[state.data.categories.selected]
  return {
    posts: state.scenes.home.posts.all,
    selectedCategory: selectedCategory && selectedCategory.name
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadPosts() {
      dispatch(loadAllPosts())
    },
    loadPostsForCategory(category) {
      dispatch(loadAllPostsForCategory(category))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
