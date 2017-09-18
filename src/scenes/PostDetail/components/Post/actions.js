import { getPost, deletePost } from './api';

export const LOAD_POST = 'LOAD_POST';
export const DELETE_POST = 'DELETE_POST';

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
