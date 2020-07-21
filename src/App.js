import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserRepos from "./components/UserRepos";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/userRepos" exact component={UserRepos}></Route>
      </Switch>
    </Router>
  );
}

export default App;
