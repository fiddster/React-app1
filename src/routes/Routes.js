import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../views/HomeView'
import { SignInView } from '../views/SignInView'
import { SettingsView } from '../views/SettingsView'
import { UserContext } from '../shared/provider/UserProvider'
import { SIGNIN_PATH, SETTINGS_PATH } from './RoutingPath'
import { USERNAME } from '../shared/utils/BrowserCache'

export const Routes = (props) => {

	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const privateRoute = (navigateToView) => {
		return authenticatedUser ? navigateToView : SignInView
	}

	const checkForAuthenticatedUser = () => {
		var user = localStorage.getItem(USERNAME)
		if (user) {
			setAuthenticatedUser(user)
		}
	}

	useEffect(() => {
		checkForAuthenticatedUser()
	})

	return (
		<Router>
			{props.children}
			<Switch>
				<Route exact path={SIGNIN_PATH} component={SignInView} />
				<Route exact path={SETTINGS_PATH} component={privateRoute(SettingsView)} />
				<Route component={HomeView} />
			</Switch>
		</Router>
	)
}