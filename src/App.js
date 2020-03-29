import React, { Component } from "react";
import SecondDiv from "./secondDiv";
import { Export, SecondExport } from "./ExportPractice";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Test from "./screens/Test";
import Error from "./screens/404";
import "./config";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about/test" component={Test} />
          <Route exact component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
