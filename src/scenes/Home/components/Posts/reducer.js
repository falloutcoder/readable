import { LOAD_ALL_POSTS, LOAD_ALL_POSTS_FOR_CATEGORY } from './actions'
import { reducer as sorterReducer, initialState as sorterInitialState } from './Sorter/reducer'

const postsReducer = (state, action) => {
  switch (action.type) {
    case LOAD_ALL_POSTS:
    case LOAD_ALL_POSTS_FOR_CATEGORY:
      return action.payload
    default:
      return state
  }
}

const initialState = { 'all': [], sorter: sorterInitialState }

export const reducer = (state=initialState, action) => {
  return {
    all: postsReducer(state.all, action),
    sorter: sorterReducer(state.sorter, action)
  }
}
