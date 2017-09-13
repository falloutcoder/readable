import { connect } from 'react-redux';
import { loadPost }  from './actions';
import Post from './post'

function mapStateToProps(state) {
  const post = state.scenes.postDetail.post
  return { post }
}

function mapDispatchToProps(dispatch) {
  return {
    load(id) {
      dispatch(loadPost(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)