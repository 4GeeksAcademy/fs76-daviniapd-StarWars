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

			className="card me-3" id="card">
			<div className="content" id="content">
				<div className="back" id="back">
					<div className="back-content" id="back-content">
						<div
							className="img"
							style={{
								backgroundImage: `url(https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg)`,
								height: "100%",
								width: "100%"
							}}
						>
							<h4 className="card-title p-3" >{props.name}</h4>
						</div>
					</div>
				</div>
				<div className="front" id="front">

					<div className="img">
						<div className="circle">
						</div>
						<div className="circle" id="right">
						</div>
						<div className="circle" id="bottom">
						</div>
					</div>
					<div className="front-content" id="front-content">
						<h4 className="card-title p-3 fs-3">{props.name}</h4>
						<p className="card-text pb-2 d-flex flex-column fs-5 ms-2">
							<span>Gender: {props.gender}</span>
							<span>Hair Color: {props.hair_color}</span>
							<span>Eye Color: {props.eye_color}</span>
						</p>
						<div className="d-flex justify-content-center pb-5">
						<Link to={"/singleCharacter/" + props.uid}>
							<button type="button" className="btn btn-outline-primary me-2" id="btnLearnMore">Learn more!</button>
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
		</div>
	);
};