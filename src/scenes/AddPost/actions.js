import { addPost } from './api';

const POST_CREATED = 'POST_CREATED';

export const createPost = (body) => {
  return dispatch => {
    return addPost(body).then(post =>
      dispatch({ type: POST_CREATED, payload: post }),
    );
  };
};
