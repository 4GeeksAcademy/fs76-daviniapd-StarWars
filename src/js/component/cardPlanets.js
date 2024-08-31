import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


import "../../styles/demo.css";

export const CardPlanets = (props) => {
	const { store, actions } = useContext(Context);
	const [isHovered, setIsHovered] = useState(false);

	const handleFavoriteClick = (event) => {
		event.stopPropagation();
		actions.favoriteList(props.name);
	};

	const isFavorite = store.favoriteItem.includes(props.name);
	// const characterImage = store.characterImages[props.name]


    return (

		<div

			className="card me-3"
			style={{ width: "auto" }}>
			<img src="https://placehold.co/450" className="card-img-top" alt="imageCard" style={{ width: "100%", height: "450px", objectFit: "cover", objectPosition: "top"  }}/>
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