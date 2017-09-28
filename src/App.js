import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import Home from './scenes/Home/home';
import PostDetail from './scenes/PostDetail/postDetail';
import AddPost from './scenes/AddPost/addPostContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/posts/:id" component={PostDetail} />
            <Route path="/add_post" component={AddPost} />
            <Route path="/:category?" component={Home} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
