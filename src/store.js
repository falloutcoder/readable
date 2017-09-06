import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as dataReducer } from './data/reducer'
import { reducer as scenesReducer } from './scenes/reducer'

const appReducer = combineReducers({
  data: dataReducer,
  scenes: scenesReducer,
});

export default createStore(
  appReducer,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
  applyMiddleware(thunk)
);
