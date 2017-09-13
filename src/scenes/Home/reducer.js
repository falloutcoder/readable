import { combineReducers } from 'redux';

import { reducer as postsReducer } from './components/Posts/reducer';
import { reducer as categoriesReducer } from './components/Category/reducer';

export const reducer = combineReducers({
  posts: postsReducer,
  categories: categoriesReducer,
})
