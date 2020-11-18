import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../views/HomeView'
import { SignInView } from '../views/SignInView'
import { SIGNIN_PATH } from './RoutingPath'

export const Routes = (props) => {
  return (
    <Router>
      {props.children}
      <Switch>
        <Route exact path={SIGNIN_PATH} component={SignInView} />
        <Route component={HomeView} />
      </Switch>
    </Router>
  )
}