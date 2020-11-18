import React, { useContext } from 'react'
import Logotype from '../../shared/media/images/tutorial-logo.svg'
import { useHistory } from 'react-router-dom'
import { HOMEVIEW_PATH, SIGNIN_PATH } from '../../routes/RoutingPath'
import { UserContext } from '../../shared/provider/UserProvider'
import './NavigationBar.scss'

export const NavigationBar = () => {
    const history = useHistory()
    const [authenticatedUser,] = useContext(UserContext)

    return (
        <div className="navigationbar-wrapper">

            <img
                onClick={() => history.push(HOMEVIEW_PATH)}
                className="logotype"
                src={Logotype}
                alt={"Error..."} />

            <span
                className="navigation-link"
                onClick={() => history.push(SIGNIN_PATH)}>Sign in
			</span>

            <span>{authenticatedUser}</span>

        </div>
    )
}