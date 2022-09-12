import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({ token, setToken, setUsername }) => {

	return <>

		<ul className="navbar">

			<li className="navbar__item navbar__home">
				<Link className="navbar__link" to={`/`}>
					Remy
				</Link>
			</li>

			<div className="navbar-end">

				{
					token
						? <>
							<Link to="/" onClick={() => {
								setToken('')
								setUsername('')
							}} className="navbar__link">Log out</Link>
						</>
						: <>
							<Link to="/register" className="navbar__link">Register</Link>
							<Link to="/login" className="navbar__link">Login</Link>
						</>
				}
			</div>
		</ul>
	</>

}
