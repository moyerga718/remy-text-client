import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../managers/AuthManager"
import "./Auth.css"

export const Login = ({ setToken, setUserId, setUsername }) => {
    const username = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const [isUnsuccessful, setIsUnsuccessful] = useState(false)
    const [usernameBool, setUsernameBool] = useState(false)
    const [passwordBool, setPasswordBool] = useState(false)

    const handleKeyPress = e => {
        if (e.charCode === 13) {
            console.log(e)
            if (e.target.name === "username") {
                setUsernameBool(true)
            }
            if (e.target.name === "password") {
                setPasswordBool(true)
                handleLogin(e)
            }
            if (isUnsuccessful) {
                setPasswordBool(true)
                handleLogin(e)
            }
        }
    }

    const handleLogin = (e) => {
        e.preventDefault()

        const user = {
            username: username.current.value,
            password: password.current.value
        }

        loginUser(user).then(res => {
            if ("valid" in res && res.valid) {

                setToken(res.token)
                setUserId(res.user_id)
                setUsername(res.username)
                navigate("/")
            }
            else {
                setIsUnsuccessful(true)
                setUsernameBool(false)
                setPasswordBool(false)
            }
        })
    }

    return (
        <section className="columns is-centered">
            <form className="column is-two-thirds" onSubmit={handleLogin}>
                <p className="subtitle">Please sign in</p>

                <div className="field">
                    <label className="label">Username:</label>
                    <div className="control">
                        <p>{'> '}</p>
                        <input
                            className="game-input"
                            type="text"
                            ref={username}
                            name="username"
                            autoFocus
                            onKeyPress={(e) => handleKeyPress(e)}
                            disabled={usernameBool}
                        />
                    </div>
                </div>

                {
                    (usernameBool || isUnsuccessful)
                        ? <div className="field">
                            <label className="label">Password:</label>
                            <div className="control">
                                <p>{'> '}</p>
                                <input 
                                    className="game-input" 
                                    type="password" 
                                    ref={password}
                                    autoFocus
                                    name="password"
                                    onKeyPress={(e) => handleKeyPress(e)}
                                    disabled={passwordBool}
                                />
                            </div>
                        </div>
                        : <></>


                }
                {
                    (passwordBool)
                    ? <div className="field is-grouped">
                        <div className="control">
                            <p>Logging in...</p>
                            {/* <button className="submit-button" type="submit" >Entering...</button> */}
                        </div>
                    </div>
                    : <></>
                }
                {
                    isUnsuccessful ? <p className="help is-danger">Username or password not valid. Try again.</p> : ''
                }
            </form>
        </section>
    )
}