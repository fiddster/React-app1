import './NavigationBar.scss'
import React, { useContext } from 'react'
import Logotype from '../../shared/media/images/tutorial-logo.svg'
import { useHistory } from 'react-router-dom'
import { HOMEVIEW_PATH, SIGNIN_PATH } from '../../routes/RoutingPath'
import { UserContext } from '../../shared/provider/UserProvider'
import { Profile } from '../profile/Profile'

export const NavigationBar = () => {
	const history = useHistory()
	const [authenticatedUser,] = useContext(UserContext)

	const displayUserIfAuthenticated = () => {
		if (authenticatedUser) {
			return <Profile />
		} else {
			return <span
				className="navigation-link sign-in"
				onClick={() => history.push(SIGNIN_PATH)}>
				Sign in
			</span>
		}
	}

	return (
		<div className="navigationbar-wrapper">

			<img
				onClick={() => history.push(HOMEVIEW_PATH)}
				className="logotype"
				src={Logotype}
				alt={'Error...'} />

			{displayUserIfAuthenticated()}

		</div>
	)
}