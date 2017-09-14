import { connect } from 'react-redux';
import { loadPost, upVotePost, downVotePost }  from './actions';
import Post from './post'

function mapStateToProps(state) {
  const post = state.scenes.postDetail.post
  return { post }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    load() {
      dispatch(loadPost(ownProps.id))
    },
    upVote() {
      dispatch(upVotePost(ownProps.id))
    },
    downVote() {
      dispatch(downVotePost(ownProps.id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)