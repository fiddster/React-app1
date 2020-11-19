import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../shared/provider/UserProvider'
import { HOMEVIEW_PATH, SETTINGS_PATH } from '../../routes/RoutingPath'
import { USERNAME } from '../../shared/utils/BrowserCache'
import './Profile.scss'

export const Profile = () => {

	const history = useHistory()
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const [dropdownExpanded, setDropdownExpanded] = useState(false)
	const [dropdownClasses, setDropdownClasses] = useState('profile-dropdown hide')

	const dropdownToggle = () => {

		setDropdownExpanded(dropdownExpanded => !dropdownExpanded)

		if (dropdownExpanded) {
			setDropdownClasses('profile-dropdown show')
		} else {
			setDropdownClasses('profile-dropdown hide')
		}
	}

	const logout = () => {
		setAuthenticatedUser()
		localStorage.removeItem(USERNAME)
		history.push(HOMEVIEW_PATH)
	}

	return (
		<div className="sign-in">
			<img src={'https://thispersondoesnotexist.com/image'} alt={'Error...'} style={{ width: 100 }} />
			<span>{authenticatedUser}</span>
			<span className="toggler" onClick={() => dropdownToggle()}>Menu</span>
			<div className={dropdownClasses}>
				<span className="dropdown-button" onClick={() => history.push(SETTINGS_PATH)}>Settings</span>
				<span className="dropdown-button" onClick={() => logout()}>Logout</span>
			</div>
		</div>
	)
}
