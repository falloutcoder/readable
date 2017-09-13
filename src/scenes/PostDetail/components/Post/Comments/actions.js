import { getAllCommentsForPost } from './api'

export const LOAD_COMMENTS = 'LOAD_COMMENTS'

export const loadComments = (id) => {
  return (dispatch) => {
    return getAllCommentsForPost(id).then(
        comments => dispatch({ type: LOAD_COMMENTS, payload: comments })
    )
  }
}
