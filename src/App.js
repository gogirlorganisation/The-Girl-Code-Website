/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import HomePage from "./pages/HomePage/home.page";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
    );
  }
}

export default App;
