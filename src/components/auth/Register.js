import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../managers/AuthManager"

import "./Auth.css"

export const Register = ({ setToken, setUserId, setUsername }) => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const username = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const navigate = useNavigate()

    const [firstNameBool, setFirstNameBool] = useState(false)
    const [lastNameBool, setLastNameBool] = useState(false)
    const [usernameBool, setUsernameBool] = useState(false)
    const [emailBool, setEmailBool] = useState(false)
    const [passwordBool, setPasswordBool] = useState(false)
    const [verifyBool, setVerifyBool] = useState(false)

    const [isUnsuccessful, setIsUnsuccessful] = useState(false)

    const handleKeyPress = e => {
        if (e.charCode === 13) {
            console.log(e)
            if (e.target.name === "firstName") {
                setFirstNameBool(true)
            } else if (e.target.name === "lastName") {
                setLastNameBool(true)
            } else if (e.target.name === "username") {
                setUsernameBool(true)
            } else if (e.target.name === "email") {
                setEmailBool(true)
            } else if (e.target.name === "password") {
                setPasswordBool(true)
            } else if (e.target.name === "verify") {
                setVerifyBool(true)
                handleRegister(e)
            }

            if (isUnsuccessful) {
                setVerifyBool(true)
                handleRegister(e)
            }
        }

    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                username: username.current.value,
                first_name: firstName.current.value,
                last_name: lastName.current.value,
                email: email.current.value,
                password: password.current.value,
            }

            registerUser(newUser)
                .then(res => {
                    if ("valid" in res && res.valid) {
                        setToken(res.token)
                        setUserId(res.user_id)
                        setUsername(res.username)
                        navigate("/")
                    } else {
                        setIsUnsuccessful(true)
                        setFirstNameBool(false)
                        setLastNameBool(false)
                        setUsernameBool(false)
                        setEmailBool(false)
                        setPasswordBool(false)
                        setVerifyBool(false)
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <section className="columns is-centered">
            <form className="column is-two-thirds" onSubmit={handleRegister}>
            <div>
                <pre>
                {`
 ______    _______  __   __  __   __ 
|    _ |  |       ||  |_|  ||  | |  |
|   | ||  |    ___||       ||  |_|  |
|   |_||_ |   |___ |       ||       |
|    __  ||    ___||       ||_     _|
|   |  | ||   |___ | ||_|| |  |   |  
|___|  |_||_______||_|   |_|  |___|  
`}

                </pre>

            </div>
            <div>
                <p>A text-based adventure game</p>
            </div>
                <p className="subtitle">Create an account</p>
                <div className="field">
                    <label className="label">First Name:</label>
                    <div className="control">
                        <p>{'> '}</p>
                        <input
                            className="game-input"
                            type="text"
                            ref={firstName}
                            name="firstName"
                            autoFocus
                            onKeyPress={(e) => handleKeyPress(e)}
                            disabled={firstNameBool}
                        />
                    </div>
                </div>

                {
                    (firstNameBool || isUnsuccessful)
                        ? <div className="field">
                            <label className="label">Last Name:</label>
                            <div className="control">
                                <p>{'> '}</p>
                                <input
                                    className="game-input"
                                    type="text"
                                    ref={lastName}
                                    name="lastName"
                                    autoFocus
                                    onKeyPress={(e) => handleKeyPress(e)}
                                    disabled={lastNameBool}
                                />
                            </div>
                        </div>
                        : <></>
                }

                {
                    (lastNameBool || isUnsuccessful)
                        ? <div className="field">
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
                        : <></>
                }

                {
                    (usernameBool || isUnsuccessful)
                        ? <div className="field">
                            <label className="label">Email:</label>
                            <div className="control">
                                <p>{'> '}</p>
                                <input
                                    className="game-input"
                                    type="email"
                                    ref={email}
                                    name="email"
                                    autoFocus
                                    onKeyPress={(e) => handleKeyPress(e)}
                                    disabled={emailBool}
                                />
                            </div>
                        </div>
                        : <></>
                }

                {
                    (emailBool || isUnsuccessful)
                        ? <div className="field">
                            <label className="label">Password:</label>

                            <div className="control">
                                <p>{'> '}</p>
                                <input
                                    className="game-input"
                                    type="password"
                                    ref={password}
                                    name="password"
                                    autoFocus
                                    onKeyPress={(e) => handleKeyPress(e)}
                                    disabled={passwordBool}
                                />
                            </div>
                        </div>
                        : <></>
                }

                {
                    (passwordBool || isUnsuccessful)
                        ? <div className="field">
                            <label className="label">Verify password:</label>
                            <div className="control">
                                <p>{'> '}</p>
                                <input
                                    className="game-input"
                                    type="password"
                                    ref={verifyPassword}
                                    name="verify"
                                    autoFocus
                                    onKeyPress={(e) => handleKeyPress(e)}
                                    disabled={verifyBool}
                                />
                            </div>
                        </div>
                        : <></>
                }

                {
                    (verifyBool)
                        ? <div className="control">
                            <p>Creating account...</p>
                            {/* <button className="submit-button" type="submit">Register</button> */}
                        </div>
                        : <></>

                }

                {
                    (isUnsuccessful)
                    ? <p className="help is-danger">User has already been made with this information. Try again.</p>
                    : <></>
                }
                {/* <div className="field is-grouped">
                    <div className="control">
                        <Link to="/login" className="link-text">Use an existing account</Link>
                    </div>
                </div> */}

            </form>
        </section>
    )
}