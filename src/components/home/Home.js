import { Link } from "react-router-dom"
import "./Home.css"

export const Home = ({ token, setToken, username, setUsername }) => {
    return <>
        <section>
            <div>
                <p>REMY - A text based adventure game</p>
            </div>
            {
                token
                    ? <>
                        <div>
                            <p>Hello, {username}</p>
                            <Link to="/new" className="link-text">
                                <p> {'>'} New Game</p>
                            </Link>
                            <Link to="/load" className="link-text">
                                <p> {'>'} Load Game</p>
                            </Link>
                            <Link to="/about" className="link-text">
                                <p> {'>'} About</p>
                            </Link>
                            <Link to="/" className="link-text" onClick={() => { 
                                setToken('') 
                                setUsername('')
                                }}>
                                <p> {'>'} Log out</p>
                            </Link>
                        </div>
                    </>
                    : <>
                        <div>
                            <Link to="/login" className="link-text">
                                <p> {'>'} Sign in</p>
                            </Link>
                            <Link to="/register" className="link-text">
                                <p> {'>'} Sign up</p>
                            </Link>
                            <Link to="/about" className="link-text">
                                <p> {'>'} About</p>
                            </Link>
                        </div>
                    </>
            }
        </section>
    </>
}