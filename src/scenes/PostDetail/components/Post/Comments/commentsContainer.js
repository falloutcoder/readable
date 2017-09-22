import { connect } from 'react-redux';
import { sortUtil } from '../../../../../utils';
import { loadComments, addComment } from './actions';
import Comments from './comments';

function mapStateToProps(state) {
  const { all, sorter } = state.scenes.postDetail.post.comments;
  const comments = all.filter(comment => !comment.deleted);
  comments.sort(sortUtil(sorter.sortBy === 'date' ? 'timestamp' : 'voteScore'));
  if (sorter.sortOrder === 'descending') {
    comments.reverse();
  }
  return { comments };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    load() {
      dispatch(loadComments(ownProps.id));
    },
    add(body) {
      dispatch(addComment(ownProps.id, body));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
