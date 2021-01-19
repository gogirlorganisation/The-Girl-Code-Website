/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Home from './pages/HomePage/home.page';
import AllComponents from './pages/allcomponents';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/all" component={AllComponents} />
      </Router>
    );
  }
}

export default App;
