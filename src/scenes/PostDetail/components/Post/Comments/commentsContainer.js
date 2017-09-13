import { connect } from 'react-redux';
import { loadComments }  from './actions';
import Comments from './comments'

function mapStateToProps(state) {
  const comments = state.scenes.postDetail.post
  return { comments }
}

function mapDispatchToProps(dispatch) {
  return {
    load(id) {
      dispatch(loadComments(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)