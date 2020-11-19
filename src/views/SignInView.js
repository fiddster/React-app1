import React, { useContext, useState } from 'react'
import { UserContext } from '../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import { HOMEVIEW_PATH } from '../routes/RoutingPath'
import { USERNAME } from '../shared/utils/BrowserCache'

export const SignInView = () => {
	const history = useHistory()
	const [username, setUsername] = useState()
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const login = (e) => {
		e.preventDefault()
		setAuthenticatedUser(username)
		localStorage.setItem(USERNAME, username)
		history.push(HOMEVIEW_PATH)
	}

	return (
		<div>
			<h1>{authenticatedUser}</h1>
			<form>
				<label>Username</label>
				<input onChange={(event) => setUsername(event.target.value)} /> <br />

				<label>Password</label>
				<input /> <br />

				<button onClick={(e) => login(e)}>Login</button>
			</form>

		</div>
	)
}
