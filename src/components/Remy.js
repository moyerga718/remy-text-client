import { useState } from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./views/ApplicationViews"


export const Remy = () => {
    const [token, setTokenState] = useState(localStorage.getItem('auth_token'))
    const [userId, setUserIdState] = useState(localStorage.getItem('user_id'))
    const [username, setUsernameState] = useState(localStorage.getItem('username'))

    const setToken = (newToken) => {
        localStorage.setItem('auth_token', newToken)
        setTokenState(newToken)
    }

    const setUserId = (userId) => {
        localStorage.setItem('user_id', userId)
        setUserIdState(userId)
    }

    const setUsername = (username) => {
        localStorage.setItem('username', username)
        setUsernameState(username)
    }

    return <>
        <NavBar token={token} setToken={setToken} setUsername={setUsername} />
        <ApplicationViews token={token} setToken={setToken} setUserId={setUserId} userId={userId} setUsername={setUsername} username={username}/>
    </>
}