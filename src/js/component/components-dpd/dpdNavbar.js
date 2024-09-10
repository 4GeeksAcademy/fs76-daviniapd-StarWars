import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";


export const DpdNavbar  = () => {
	const { store, actions } = useContext(Context);


	return (
		<nav className="navbar navbar-light bg-black d-flex justify-content-around py-2" style={{ zIndex: 1000 }}>
				<Link to="/homeDaviniapd">
					<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="Star-Wars-Logo" style={{ height: '100%', maxHeight: '90px' }} />
				</Link>
				<div className="btn-group ml-auto me-3">
					<button type="button" className="btn btn-outline-light me-2 dropdown-toggle p-1 px-3" data-bs-toggle="dropdown" aria-expanded="false" id="btnFavDpd">
						Favorites
						<span className="rounded mx-2 px-1 text-dark fw-bold" style={{ fontSize: '0.85em', backgroundColor: "#ffe81f" }}>
							{store.favoriteItem.length}
						</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end mt-2 me-2">

						{store.favoriteItem.length === 0 ? (
							<li className="dropdown-item">(list empty)</li>
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

		</nav>
	);
};
