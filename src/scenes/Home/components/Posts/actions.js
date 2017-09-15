import { getAllPosts, getAllPostsForCategory } from './api';

export const LOAD_ALL_POSTS = 'LOAD_ALL_POSTS';
export const LOAD_ALL_POSTS_FOR_CATEGORY = 'LOAD_ALL_POSTS_FOR_CATEGORY';

export const loadAllPosts = () => {
  return dispatch => {
    return getAllPosts().then(posts =>
      dispatch({ type: LOAD_ALL_POSTS, payload: posts }),
    );
  };
};

export const loadAllPostsForCategory = category => {
  return dispatch => {
    return getAllPostsForCategory(category).then(posts =>
      dispatch({ type: LOAD_ALL_POSTS_FOR_CATEGORY, payload: posts }),
    );
  };
};
