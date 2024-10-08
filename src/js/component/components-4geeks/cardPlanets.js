import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";


export const CardPlanets = (props) => {
	const { store, actions } = useContext(Context);
	const [isHovered, setIsHovered] = useState(false);

	const handleFavoriteClick = (event) => {
		event.stopPropagation();
		actions.favoriteList(props.name);
	};

	const isFavorite = store.favoriteItem.includes(props.name);
	const defaultImageUrl = "https://user-images.githubusercontent.com/5948318/38711585-ef6a8970-3e9c-11e8-96c7-fc8a610cdde2.png";

	return (

		<div

			className="card me-3"
			style={{ width: "auto" }}>
			<img src={`https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`}
				className="card-img-top" alt="Not found picture of this planet"
				style={{ width: "100%", height: "300px", objectFit: "cover", objectPosition: "top" }}
				onError={(e) => e.target.src = defaultImageUrl} />

			<div className="card-body">
				<h5 className="card-titl py-2">{props.name}</h5>
				<p className="card-text pb-2 d-flex flex-column">
					<span>Population: {props.population}</span>
					<span>Terrain: {props.terrain}</span>
				</p>
				<Link to={"/singlePlanet/" + props.uid}>
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