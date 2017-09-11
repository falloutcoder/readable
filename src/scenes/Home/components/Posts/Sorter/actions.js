export const SORT_POSTS_BY_DATE = 'SORT_POSTS_BY_DATE'
export const SORT_POSTS_BY_VOTES = 'SORT_POSTS_BY_VOTES'
export const SORT_POSTS_ASCENDING = 'SORT_POSTS_ASCENDING'
export const SORT_POSTS_DESCENDING = 'SORT_POSTS_DESCENDING'

export function sortPostsByDate() {
  return { type: SORT_POSTS_BY_DATE }
}

export function sortPostsByVote() {
  return { type: SORT_POSTS_BY_VOTES }
}

export function sortPostsInAscending() {
  return { type: SORT_POSTS_ASCENDING }
}

export function sortPostsInDescending() {
  return { type: SORT_POSTS_DESCENDING }
}
