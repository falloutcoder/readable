import {
  DOWN_VOTE_POST,
  UP_VOTE_POST,
  DELETE_POST,
} from '../../../../components/Post/actions';
import { LOAD_ALL_POSTS, LOAD_ALL_POSTS_FOR_CATEGORY } from './actions';
import { reducer as sorterReducer } from './Sorter/reducer';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ALL_POSTS:
    case LOAD_ALL_POSTS_FOR_CATEGORY:
      return action.payload;
    case DOWN_VOTE_POST:
    case UP_VOTE_POST:
    case DELETE_POST:
      return state
        .filter(post => post.id !== action.payload.id)
        .concat(action.payload);
    default:
      return state;
  }
};

export const reducer = (state = {}, action) => {
  return {
    all: postsReducer(state.all, action),
    sorter: sorterReducer(state.sorter, action),
  };
};
