import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { DpdSearch } from "./dpdSearch";


export const DpdNavbar = () => {
	const { store, actions } = useContext(Context);


	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-black d-flex justify-content-between" style={{ zIndex: 1000 }}>
			<div className="container-fluid">

				<div className="col-md-2 col-sm-6 col-xs-6 order-md-1 order-sm-1 order-xs-1">
					<Link to="/homeDaviniapd">
						<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="Star-Wars-Logo" style={{ height: '100%', maxHeight: '90px' }} />
					</Link>
				</div>
				<div className="col-md-8 col-sm-12 col-xs-12 order-md-2 order-sm-3 order-xs-3">
					<DpdSearch />
				</div>
				<div className="col-md-2 col-sm-6 col-xs-6 order-md-3 order-sm-2 order-xs-2">
					<div className="btn-group ml-auto ms-5 h-50 my-auto">
						<button type="button" className="btn btn-outline-light me-2 dropdown-toggle py-1 px-2" data-bs-toggle="dropdown" aria-expanded="false" id="btnFavDpd">
							Likes
							<span className="rounded mx-2 px-1 text-dark fw-bold" style={{ fontFamily: 'monospace', fontSize: '0.85em', backgroundColor: "#ffe81f" }}>
								{store.favoriteItem.length}
							</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-end mt-2 me-2" >

							{store.favoriteItem.length === 0 ? (
								<li className="dropdown-item">(list empty)</li>
							) : (
								store.favoriteItem.map((name, index) => (
									<li className="dropdown-item d-flex justify-content-between" key={index}>
										{name}

										<i className="fa-solid fa-trash my-auto ms-3"
											style={{ cursor: 'pointer' }}
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
			</div>
		</nav>
	);
};
