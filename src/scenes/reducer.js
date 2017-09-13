import { combineReducers } from 'redux';

import { reducer as homeReducer } from './Home/reducer';
import { reducer as postDetailReducer } from './PostDetail/reducer';

export const reducer = combineReducers({
  home: homeReducer,
  postDetail: postDetailReducer,
});
