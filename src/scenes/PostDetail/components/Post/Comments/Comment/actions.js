import { castVoteToComment, deleteComment } from './api';

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';
export const OPEN_EDIT_COMMENT_MODAL = 'OPEN_EDIT_COMMENT_MODAL';
export const CLOSE_EDIT_COMMENT_MODAL = 'CLOSE_EDIT_COMMENT_MODAL';

export const openEditCommentModal = id => ({
  type: OPEN_EDIT_COMMENT_MODAL,
  payload: { id },
});
export const closeEditCommentModal = () => ({
  type: CLOSE_EDIT_COMMENT_MODAL,
});

export const upVoteComment = id => {
  return dispatch => {
    return castVoteToComment(id, 'upVote').then(post =>
      dispatch({ type: UP_VOTE_COMMENT, payload: post }),
    );
  };
};

export const downVoteComment = id => {
  return dispatch => {
    return castVoteToComment(id, 'downVote').then(post =>
      dispatch({ type: DOWN_VOTE_COMMENT, payload: post }),
    );
  };
};

export const removeComment = id => {
  return dispatch => {
    return deleteComment(id).then(post =>
      dispatch({ type: DELETE_COMMENT, payload: post }),
    );
  };
};
