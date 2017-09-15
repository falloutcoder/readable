import { connect } from 'react-redux';
import Sorter from '../../../../../../components/Sorter/sorter';
import {
  sortCommentsByVote,
  sortCommentsByDate,
  sortCommentsInAscending,
  sortCommentsInDescending,
} from './actions';

function mapStateToProps(state) {
  const sorter = state.scenes.postDetail.post.comments.sorter;
  const { sortBy, sortOrder } = sorter;
  return { sortBy, sortOrder };
}

function mapDispatchToProps(dispatch) {
  return {
    sortByVote() {
      dispatch(sortCommentsByVote());
    },
    sortByDate() {
      dispatch(sortCommentsByDate());
    },
    sortInAscending() {
      dispatch(sortCommentsInAscending());
    },
    sortInDescending() {
      dispatch(sortCommentsInDescending());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sorter);
