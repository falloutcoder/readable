import { connect } from 'react-redux'
import Sorter from '../../../../../components/Sorter/sorter'
import {
  sortPostsByVote,
  sortPostsByDate,
  sortPostsInAscending,
  sortPostsInDescending } from './actions'

function mapStateToProps(state) {
  const sorter = state.scenes.home.posts.sorter
  const { sortBy, sortOrder } = sorter
  return { sortBy, sortOrder }
}

function mapDispatchToProps(dispatch) {
  return {
    sortByVote() {
      dispatch(sortPostsByVote())
    },
    sortByDate() {
      dispatch(sortPostsByDate())
    },
    sortInAscending() {
      dispatch(sortPostsInAscending())
    },
    sortInDescending() {
      dispatch(sortPostsInDescending())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sorter)
