import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home'
import About from "./components/About";
import Greet from "./components/Greet";

function App2() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/greet/:name" exact component={Greet} />
      </Switch>
    </Router>
  );
}

export default App2;
