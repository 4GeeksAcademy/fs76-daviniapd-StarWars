import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";


export const CardVehicles = (props) => {
	const { store, actions } = useContext(Context);
	const [isHovered, setIsHovered] = useState(false);

	const handleFavoriteClick = (event) => {
		event.stopPropagation();
		actions.favoriteList(props.name);
	};

	const isFavorite = store.favoriteItem.includes(props.name);


	return (

		<div

			className="card me-3"
			style={{ width: "auto" }}>
			<img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg`} className="card-img-top" alt="imageCard" style={{ width: "100%", height: "200px", objectFit: "cover", objectPosition: "center" }} />
			<div className="card-body">
				<h5 className="card-titl py-2">{props.name}</h5>
				<p className="card-text pb-2 d-flex flex-column">
					<span>Cost in credits: {props.cost_in_credits}</span>
					<span>Passengers: {props.passengers}</span>
				</p>
				<Link to={"/singleVehicle/" + props.uid}>
					<button type="button" className="btn btn-outline-primary pb-2">Learn more!</button>
				</Link>
				<button
					className="btn btn-outline-warning float-end"
					onClick={handleFavoriteClick}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<i className={`${isFavorite ? 'fa-solid fa-heart' : `${isHovered ? 'fa-solid fa-heart text-dark' : 'fa-regular fa-heart text-warning'}`}`}></i>
				</button>
			</div>
		</div>

	);
};