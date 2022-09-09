import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../managers/AuthManager"

export const Login = ({ setToken, setUserId, setUsername}) => {
    const username = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const [isUnsuccessful, setIsUnsuccessful] = useState(false)

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
            }
        })
    }

    return (
        <section className="columns is-centered">
            <form className="column is-two-thirds" onSubmit={handleLogin}>
                <p className="subtitle">Please sign in</p>

                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input className="input" type="text" ref={username} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="password" ref={password} />
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" type="submit" >Submit</button>
                    </div>
                    <div className="control">
                        <Link to="/register" className="button is-link is-light">Cancel</Link>
                    </div>
                </div>
                {
                    isUnsuccessful ? <p className="help is-danger">Username or password not valid</p> : ''
                }
            </form>
        </section>
    )
}