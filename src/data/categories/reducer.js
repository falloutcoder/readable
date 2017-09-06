import { LOAD_ALL_CATEGORIES, SELECT_CATEGORY } from './actions'

const initialState = { 'all': [], 'selected': null}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_CATEGORIES:
      return { ...state, all: action.payload }
    case SELECT_CATEGORY:
      return { ...state, selected: action.payload.index }
    default:
      return state
  }
}

