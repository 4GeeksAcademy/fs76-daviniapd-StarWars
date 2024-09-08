import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";


export const DpdNavbar  = () => {
	const { store, actions } = useContext(Context);


	return (
		<nav className="navbar navbar-light bg-light bg-opacity-25 px-5 py-3" style={{ zIndex: 1000 }}>
			<div className="container">
				<Link to="/homeDaviniapd">
					<img src="https://i.pinimg.com/originals/c7/7c/11/c77c11c6c03ff5c4f2d250e893ca615f.png" alt="Star-Wars-Logo" style={{ height: '100%', maxHeight: '50px' }} />
				</Link>
				<div className="btn-group ml-auto me-3">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
						<span className="bg-secondary rounded mx-2 px-1" style={{ fontSize: '0.85em' }}>
							{store.favoriteItem.length}
						</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end">

						{store.favoriteItem.length === 0 ? (
							<li className="dropdown-item">(empty)</li>
						) : (
							store.favoriteItem.map((name, index) => (
								<li className="dropdown-item d-flex justify-content-between" key={index}>
									{name}

									<i className="fa-solid fa-trash my-auto ms-3"
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
