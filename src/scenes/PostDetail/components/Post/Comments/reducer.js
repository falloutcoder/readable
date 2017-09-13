import { loadComments } from './api'
import { LOAD_COMMENTS } from './actions'

export const commentsReducer = (state, action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return action.payload
    default:
      return state
  }
}
