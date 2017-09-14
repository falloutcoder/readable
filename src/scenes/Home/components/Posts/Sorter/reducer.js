import {
  SORT_POSTS_BY_DATE,
  SORT_POSTS_BY_VOTES,
  SORT_POSTS_ASCENDING,
  SORT_POSTS_DESCENDING } from './actions'

const DATE = 'date'
const VOTES = 'votes'
const ASCENDING = 'ascending'
const DESCENDING = 'descending'

const initialState = {
  sortBy: DATE,
  sortOrder: ASCENDING
}

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case SORT_POSTS_BY_DATE:
      return { ...state, sortBy: DATE }
    case SORT_POSTS_BY_VOTES:
      return { ...state, sortBy: VOTES }
    case SORT_POSTS_ASCENDING:
      return { ...state, sortOrder: ASCENDING }
    case SORT_POSTS_DESCENDING:
      return { ...state, sortOrder: DESCENDING }
    default:
      return state
  }
}
