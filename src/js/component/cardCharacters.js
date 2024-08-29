import React from "react";
import { Link } from "react-router-dom";


import "../../styles/demo.css";

export const CardCharacters = (props) => {

	return (

		<div
			key={props.uid}
			className="card me-3"
			style={{ width: "18rem" }}>
			<img src="https://placehold.jp/400x200.png" className="card-img-top" alt="imageCard" />
			<div className="card-body mx-2">
				<h5 className="card-titl py-2">{props.name}</h5>
				<p className="card-text pb-2 d-flex flex-column">
					<span>Gender: {props.gender}</span>
					<span>Hair Color: {props.hair_color}</span>
					<span>Eye-Color: {props.eye_color}</span>
				</p>
				<Link to={"/singleCharacter/" + props.uid}>
					<button type="button" className="btn btn-outline-primary pb-2">Learn more!</button>
				</Link>
				<button className="btn btn btn-outline-warning float-end">
					<i className="fa-regular fa-heart"></i>
				</button>
			</div>
		</div>

	);
};