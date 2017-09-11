import { connect } from 'react-redux'
import { loadAllPosts, loadAllPostsForCategory } from './actions'
import Posts from './posts'

const sortUtil = (field) => {
  return (post1,post2) => {
    const p1 = post1[field]
    const p2 = post2[field]
    if (p1 < p2) {
      return -1
    }
    if (p1 > p2) {
      return 1
    }
    return 0
  }
}

function mapStateToProps(state) {
  const categories = state.scenes.home.categories
  const selectedCategory = categories.all[categories.selected]
  const { all, sorter } = state.scenes.home.posts
  const posts = Object.assign([], all)
  posts.sort(sortUtil(sorter.sortBy === 'date' ? 'timestamp': 'voteScore'))
  if (sorter.sortOrder === 'descending') {
    posts.reverse()
  }
  return {
    posts: posts,
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
