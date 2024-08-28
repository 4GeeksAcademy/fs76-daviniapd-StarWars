import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light px-5 mb-3">
			<Link to="/homeGeeks">
				<span className="navbar-brand mb-0 ms-5 h1">STAR WARS</span>
			</Link>
			<div className="btn-group ml-auto me-5">
				<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Item</a></li>
					</ul>

			</div>
		</nav>
	);
};
