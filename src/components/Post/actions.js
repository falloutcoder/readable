import { castVoteToPost, deletePost, editPost } from './api';

export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const OPEN_EDIT_POST_MODAL = 'OPEN_EDIT_POST_MODAL';
export const CLOSE_EDIT_POST_MODAL = 'CLOSE_EDIT_POST_MODAL';

export const openEditPostModal = () => ({ type: OPEN_EDIT_POST_MODAL });
export const closeEditPostModal = () => ({ type: CLOSE_EDIT_POST_MODAL });

export const upVotePost = id => {
  return dispatch => {
    return castVoteToPost(id, 'upVote').then(post =>
      dispatch({ type: UP_VOTE_POST, payload: post }),
    );
  };
};

export const downVotePost = id => {
  return dispatch => {
    return castVoteToPost(id, 'downVote').then(post =>
      dispatch({ type: DOWN_VOTE_POST, payload: post }),
    );
  };
};

export const removePost = id => {
  return dispatch => {
    return deletePost(id).then(post =>
      dispatch({ type: DELETE_POST, payload: post }),
    );
  };
};

export const updatePost = (id, body) => {
  return dispatch => {
    return editPost(id, body).then(post =>
      dispatch({ type: UPDATE_POST, payload: post }),
    );
  };
};
