import { OPEN_NEW_COMMENT_MODAL, CLOSE_NEW_COMMENT_MODAL } from './actions';

export const reducer = (state = false, action) => {
  switch (action.type) {
    case OPEN_NEW_COMMENT_MODAL:
      return true;
    case CLOSE_NEW_COMMENT_MODAL:
      return false;
    default:
      return state;
  }
};
