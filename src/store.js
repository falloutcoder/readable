import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as scenesReducer } from './scenes/reducer'

const appReducer = combineReducers({
  scenes: scenesReducer,
});

export default createStore(
  appReducer,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
  applyMiddleware(thunk)
);
