import {
  SORT_COMMENTS_BY_DATE,
  SORT_COMMENTS_BY_VOTES,
  SORT_COMMENTS_ASCENDING,
  SORT_COMMENTS_DESCENDING } from './actions'

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
    case SORT_COMMENTS_BY_DATE:
      return { ...state, sortBy: DATE }
    case SORT_COMMENTS_BY_VOTES:
      return { ...state, sortBy: VOTES }
    case SORT_COMMENTS_ASCENDING:
      return { ...state, sortOrder: ASCENDING }
    case SORT_COMMENTS_DESCENDING:
      return { ...state, sortOrder: DESCENDING }
    default:
      return state
  }
}
