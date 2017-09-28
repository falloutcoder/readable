import {
  DOWN_VOTE_POST,
  UP_VOTE_POST,
  DELETE_POST,
  UPDATE_POST,
  OPEN_EDIT_POST_MODAL,
  CLOSE_EDIT_POST_MODAL,
} from '../../../../components/Post/actions';
import { LOAD_POST } from './actions';
import commentsReducer from './Comments/reducer';

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case OPEN_EDIT_POST_MODAL:
      return {
        ...state,
        editPostModal: true,
      };
    case CLOSE_EDIT_POST_MODAL:
      return {
        ...state,
        editPostModal: false,
      };
    case DOWN_VOTE_POST:
    case LOAD_POST:
    case UPDATE_POST:
    case DELETE_POST:
    case UP_VOTE_POST:
      return {
        ...action.payload,
        comments: commentsReducer(state.comments, action),
      };
    default:
      return { ...state, comments: commentsReducer(state.comments, action) };
  }
};
