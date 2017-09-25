import { getAllCommentsForPost, addCommentToPost, editComment } from './api';

export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';

export const loadComments = id => {
  return dispatch => {
    return getAllCommentsForPost(id).then(comments =>
      dispatch({ type: LOAD_COMMENTS, payload: comments }),
    );
  };
};

export const addComment = (id, body) => {
  return dispatch => {
    return addCommentToPost(id, body).then(post =>
      dispatch({ type: ADD_COMMENT, payload: post }),
    );
  };
};

export const updateComment = (id, body) => {
  return dispatch => {
    return editComment(id, body).then(post =>
      dispatch({ type: EDIT_COMMENT, payload: post }),
    );
  };
};
