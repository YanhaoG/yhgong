import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Education from "./components/Education";
import Work from "./components/Work";
import Me from "./components/Me";
import Projects from "./components/Projects";
import Contact from "./components/Contact";



function App() {
  return (
    <Router basename="/">
      <Route exact path={"/"} component={Me}></Route>
      <Switch>
        <Route exact path="/education" component={Education}></Route>
        <Route exact path="/work" component={Work}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/contactme" component={Contact}></Route>
      </Switch>
    </Router>
  );
}

export default App;
