import { LOAD_POST, DOWN_VOTE_POST, UP_VOTE_POST } from './actions';
import commentsReducer from './Comments/reducer';

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case DOWN_VOTE_POST:
    case LOAD_POST:
    case UP_VOTE_POST:
      return {
        ...action.payload,
        comments: commentsReducer(state.comments, action),
      };
    default:
      return { ...state, comments: commentsReducer(state.comments, action) };
  }
};
