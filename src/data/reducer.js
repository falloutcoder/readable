import { combineReducers } from 'redux';

import { reducer as categoriesReducer } from './categories/reducer';

export const reducer = combineReducers({
	categories: categoriesReducer,
});
