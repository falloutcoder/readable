export const SORT_COMMENTS_BY_DATE = 'SORT_COMMENTS_BY_DATE';
export const SORT_COMMENTS_BY_VOTES = 'SORT_COMMENTS_BY_VOTES';
export const SORT_COMMENTS_ASCENDING = 'SORT_COMMENTS_ASCENDING';
export const SORT_COMMENTS_DESCENDING = 'SORT_COMMENTS_DESCENDING';

export function sortCommentsByDate() {
  return { type: SORT_COMMENTS_BY_DATE };
}

export function sortCommentsByVote() {
  return { type: SORT_COMMENTS_BY_VOTES };
}

export function sortCommentsInAscending() {
  return { type: SORT_COMMENTS_ASCENDING };
}

export function sortCommentsInDescending() {
  return { type: SORT_COMMENTS_DESCENDING };
}
