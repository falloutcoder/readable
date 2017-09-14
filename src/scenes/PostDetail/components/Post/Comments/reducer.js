import { reducer as sorterReducer } from './Sorter/reducer'
import { LOAD_COMMENTS } from './actions'

const commentsReducer = (state=[], action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return action.payload
    default:
      return state
  }
}

const reducer = (state={}, action) => {
  return {
    'all': commentsReducer(state.all, action),
    'sorter': sorterReducer(state.sorter, action)
  }
}

export default reducer
