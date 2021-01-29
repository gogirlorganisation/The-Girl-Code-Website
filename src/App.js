/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./pages/HomePage/home.page";
import AllComponents from "./pages/allcomponents";
// import Form from "./components/form";
import JoinUs from "./pages/JoinUsPage/joinus.page";
import Workshop from "./pages/WorkshopPage/workshop.page";
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/workshops" component={Workshop} />
        <Route exact path="/all" component={AllComponents} />
        <Route exact path="/joinus" component={JoinUs} />
        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
