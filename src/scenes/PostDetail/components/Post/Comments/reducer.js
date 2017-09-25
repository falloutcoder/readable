import { reducer as sorterReducer } from './Sorter/reducer';
import { reducer as addCommentReducer } from './AddComment/reducer';
import { reducer as commentReducer } from './Comment/reducer';
import { LOAD_COMMENTS, ADD_COMMENT, EDIT_COMMENT } from './actions';
import {
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
  DELETE_COMMENT,
} from './Comment/actions';

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return action.payload;
    case UP_VOTE_COMMENT:
    case DOWN_VOTE_COMMENT:
    case EDIT_COMMENT:
    case DELETE_COMMENT:
      return state
        .filter(comment => comment.id !== action.payload.id)
        .concat(action.payload);
    case ADD_COMMENT:
      return state.concat(action.payload);
    default:
      return state;
  }
};

const reducer = (state = {}, action) => {
  return {
    all: commentsReducer(state.all, action),
    sorter: sorterReducer(state.sorter, action),
    showNewCommentModal: addCommentReducer(state.showNewCommentModal, action),
    editCommentModal: commentReducer(state.editCommentModal, action),
  };
};

export default reducer;
