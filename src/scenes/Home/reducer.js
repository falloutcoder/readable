import { combineReducers } from 'redux';

import { reducer as postsReducer } from './components/Posts/reducer';

export const reducer = combineReducers({
  posts: postsReducer,
});
