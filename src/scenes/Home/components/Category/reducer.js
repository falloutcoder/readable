import { LOAD_ALL_CATEGORIES } from './actions';

export const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ALL_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};
