import * as React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./containers/Home";
import { NotFoundPage } from "./containers/NotFoundPage";

export default function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={NotFoundPage} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
