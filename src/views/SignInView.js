import React, { useContext, useState } from 'react';
import { UserContext } from '../shared/provider/UserProvider';
export const SignInView = () => {
    const [username, setUsername] = useState();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

    const login = (e) => {
        e.preventDefault();
        setAuthenticatedUser(username);
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
    );
};
