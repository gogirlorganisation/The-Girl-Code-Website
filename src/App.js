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
import Form from "./components/form";
import Chapter from "./pages/ChapterPage/chapter.page";
import IndWorkshop from "./pages/IndWorkshopPage/IndWorksop.page";
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/all" component={AllComponents} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/chapter" component={Chapter}/>
        <Route exact path="/indworkshop" component={IndWorkshop}/>
      </Router>
    );
  }
}

export default App;
