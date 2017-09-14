import { getPost, castVoteToPost } from './api'

export const LOAD_POST = 'LOAD_POST'
export const UP_VOTE_POST = 'UP_VOTE_POST'
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST'
export const DELETE_POST = 'DOWN_VOTE_POST'

export const loadPost = (id) => {
  return (dispatch) => {
    return getPost(id).then(
        post => dispatch({ type: LOAD_POST, payload: post })
    )
  }
}

export const upVotePost = (id) => {
  return (dispatch) => {
    return castVoteToPost(id, 'upVote').then(
        post => dispatch({ type: UP_VOTE_POST, payload: post })
    )
  }
}


export const downVotePost = (id) => {
  return (dispatch) => {
    return castVoteToPost(id, 'downVote').then(
        post => dispatch({ type: DOWN_VOTE_POST, payload: post })
    )
  }
}
