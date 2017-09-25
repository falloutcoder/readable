import { OPEN_EDIT_COMMENT_MODAL, CLOSE_EDIT_COMMENT_MODAL } from './actions';

export const reducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_EDIT_COMMENT_MODAL:
      return action.payload.id;
    case CLOSE_EDIT_COMMENT_MODAL:
      return null;
    default:
      return state;
  }
};
