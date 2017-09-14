import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch} from 'react-router-dom'
import store from './store';
import Home from './scenes/Home/home'
import PostDetail from './scenes/PostDetail/postDetail'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/posts/:id" component={PostDetail}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
