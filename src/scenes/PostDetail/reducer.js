import { combineReducers } from 'redux';
import { reducer as postReducer } from './components/Post/reducer';

export const reducer = combineReducers({
  post: postReducer,
})
