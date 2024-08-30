import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	
	return (
		<nav className="navbar navbar-light bg-light px-5 py-3 mb-3">
			        <div className="container">
			<Link to="/homeGeeks">
				<img src="https://i.pinimg.com/originals/c7/7c/11/c77c11c6c03ff5c4f2d250e893ca615f.png" alt="Star-Wars-Logo" style={{ height: '100%', maxHeight: '50px' }}/>
			</Link>
			<div className="btn-group ml-auto me-5">
				<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
					<span className="bg-secondary rounded mx-2 px-1"style={{ fontSize: '0.85em' }}>
						{store.favoriteItem.length}
					</span>
				</button>
				<ul className="dropdown-menu">

					{store.favoriteItem.length === 0 ? (
						<li className="dropdown-item">(empty)</li>
					) : (
						store.favoriteItem.map((name, index) => (
							<li className="d-flex" key={index}>
								<Link className="dropdown-item" to={`/singleCharacter/${index + 1}`}>
									{name}
								</Link>
								<i className="fa-solid fa-trash me-3 my-auto"
									onClick={(e) => {
										e.stopPropagation();
										actions.removeFavorite(index);
									}}
								></i>
							</li>
						))
					)}
				</ul>

			</div>
			</div>
		</nav>
	);
};
