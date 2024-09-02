import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

import "../../../styles/dpdCards.css"

export const DpdCharacters = (props) => {
	const { store, actions } = useContext(Context);
	const [isHovered, setIsHovered] = useState(false);

	const handleFavoriteClick = (event) => {
		event.stopPropagation();
		actions.favoriteList(props.name);
	};

	const isFavorite = store.favoriteItem.includes(props.name);


	return (

		<div

			className="card me-3">
			<div class="content">
				<div class="back">
					<div class="back-content">
						<div
							className="img"
							style={{
								backgroundImage: `url(https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg)`,
								height: "100%",
								width: "100%"
							}}
						>
							<h4 className="card-title p-3">{props.name}</h4>
						</div>
					</div>
				</div>
				<div class="front">

					<div class="img">
						<div class="circle">
						</div>
						<div class="circle" id="right">
						</div>
						<div class="circle" id="bottom">
						</div>
					</div>
					<div class="front-content">
						<h4 className="card-title p-3">{props.name}</h4>
						<p className="card-text pb-2 d-flex flex-column">
							<span>Gender: {props.gender}</span>
							<span>Hair Color: {props.hair_color}</span>
							<span>Eye Color: {props.eye_color}</span>
						</p>
						<Link to={"/singleCharacter/" + props.uid}>
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
			</div>
		</div>
	);
};