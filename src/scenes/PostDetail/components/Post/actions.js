import { getPost, deletePost, editPost } from './api';

export const LOAD_POST = 'LOAD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const OPEN_EDIT_POST_MODAL = 'OPEN_EDIT_POST_MODAL';
export const CLOSE_EDIT_POST_MODAL = 'CLOSE_EDIT_POST_MODAL';

export const openEditPostModal = () => ({ type: OPEN_EDIT_POST_MODAL });
export const closeEditPostModal = () => ({ type: CLOSE_EDIT_POST_MODAL });

export const loadPost = id => {
  return dispatch => {
    return getPost(id).then(post =>
      dispatch({ type: LOAD_POST, payload: post }),
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
