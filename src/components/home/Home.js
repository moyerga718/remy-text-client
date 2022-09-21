import { Link, useNavigate } from "react-router-dom"
import "./Home.css"

export const Home = ({ token, setToken, username, setUsername }) => {
    const navigate = useNavigate()

    return <>
        <section>
            <div>
                <pre>
                    {`
 ______     ______     __    __     __  __    
/\\  == \\   /\\  ___\\   /\\ "-./  \\   /\\ \\_\\ \\   
\\ \\  __<   \\ \\  __\\   \\ \\ \\-./\\ \\  \\ \\____ \\  
 \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\_\\ \\ \\_\\  \\/\\_____\\ 
  \\/_/ /_/   \\/_____/   \\/_/  \\/_/   \\/_____/                                  
`}

                </pre>

            </div>
            <div>
                <p>A text-based adventure game</p>
            </div>

            {
                token
                    ? <>
                        <div className="home-container">
                            <p>Hello, {username}</p>
                            <Link to="/new" className="link-text">
                                {'>'} New Game
                            </Link>
                            <Link to="/load" className="link-text">
                                {'>'} Load Game
                            </Link>
                            <Link to="/about" className="link-text">
                                {'>'} About
                            </Link>
                            <Link to="/" className="link-text" onClick={() => {
                                setToken('')
                                setUsername('')
                            }}>
                                {'>'} Log out
                            </Link>
                        </div>
                    </>
                    : <>
                        <div className="home-container">
                            <Link to="/login" className="link-text">
                                {'>'} Sign in
                            </Link>
                            <Link to="/register" className="link-text">
                                {'>'} Sign up
                            </Link>
                            <Link to="/about" className="link-text">
                                {'>'} About
                            </Link>
                        </div>
                    </>
            }
        </section>
    </>
}