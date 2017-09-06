import { LOAD_ALL_POSTS, LOAD_ALL_POSTS_FOR_CATEGORY } from './actions'

const initialState = { 'all': [] }

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_POSTS:
    case LOAD_ALL_POSTS_FOR_CATEGORY:
      return { all: action.payload }
    default:
      return state
  }
}
