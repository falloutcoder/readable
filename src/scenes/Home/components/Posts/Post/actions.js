import { getCommentsCountForPost } from './api';

export const GET_COMMENTS_COUNT = 'GET_COMMENTS_COUNT';

export const getCommentsCount = id => {
  return dispatch => {
    return getCommentsCountForPost(id).then(comments =>
      dispatch({
        type: GET_COMMENTS_COUNT,
        payload: { count: comments.length, id },
      }),
    );
  };
};
