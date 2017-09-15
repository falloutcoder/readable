import { getAllCategories } from './api';

export const LOAD_ALL_CATEGORIES = 'LOAD_ALL_CATEGORIES';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const loadAllCategories = () => {
  return dispatch => {
    return getAllCategories().then(categories =>
      dispatch({ type: LOAD_ALL_CATEGORIES, payload: categories }),
    );
  };
};
export const selectCategory = index => ({
  type: SELECT_CATEGORY,
  payload: { index },
});
