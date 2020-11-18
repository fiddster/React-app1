import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeView } from '../views/HomeView'
import { PageNotFound } from '../views/PageNotFound'

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={HomeView} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};
