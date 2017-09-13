import { getPost } from './api'

export const LOAD_POST = 'LOAD_POST'

export const loadPost = (id) => {
  return (dispatch) => {
    return getPost(id).then(
        post => dispatch({ type: LOAD_POST, payload: post })
    )
  }
}
