import { LOAD_POST } from './actions'
import { commentsReducer } from './Comments/reducer'

const initialState = { 'comments': [] }

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case LOAD_POST:
      return { ...action.payload, 'comments': commentsReducer(state.comments, action) }
    default:
      return { ...state, 'comments': commentsReducer(state.comments, action) }
  }
}
