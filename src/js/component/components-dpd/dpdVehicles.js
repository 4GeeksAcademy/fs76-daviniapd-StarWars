import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

import "../../../styles/dpdCards.css"

export const DpdVehicles = (props) => {
	const { store, actions } = useContext(Context);
	const [isHovered, setIsHovered] = useState(false);
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.src = `https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg`;
		img.onload = () => setImageLoaded(true);
		img.onerror = () => setImageLoaded(false);
	  }, [props.uid]);

	const handleFavoriteClick = (event) => {
		event.stopPropagation();
		actions.favoriteList(props.name);
	};

	const isFavorite = store.favoriteItem.includes(props.name);
	const defaultImageUrl = "https://img.itch.zone/aW1nLzk3MzU5MTQucG5n/original/jopfxl.png";


	return (

		<div

			className="card" id="card">
			<div className="content" id="content">
				<div className="back" id="back">
					<div className="back-content" id="back-content">
						<div
							className="img"
							style={{
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
								backgroundPosition: "top",
								height: "100%",
								width: "100%",
								backgroundImage: imageLoaded ? `url(https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg)` : `url(${defaultImageUrl})`
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
						<h4 className="card-title text-center p-3 fs-3 text-light">{props.name}</h4>
						<p className="card-text text-center mb-5 d-flex flex-column fs-5">
							<span className="star-wars-font">Cost in credits   <span className="fs-6"> {props.cost_in_credits}</span></span>
							<span className="star-wars-font">Passengers   <span className="fs-6">  {props.passengers}</span></span>
							<span className="star-wars-font">Crew   <span className="fs-6">  {props.crew}</span></span>
						</p>
						<div className="d-flex justify-content-center py-5">
							<Link to={"/dpdSingleCha/" + props.uid}>
								<button type="button" className="btn btn-outline-light me-2" id="btnLearnMore">Learn more!</button>
							</Link>
							<button
								className="btn btn-outline-light float-end"
								onClick={handleFavoriteClick}
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
							>
								<i className={`${isFavorite ? 'fa-solid fa-heart' : `${isHovered ? 'fa-solid fa-heart text-dark' : 'fa-regular fa-heart text-light'}`}`}></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};