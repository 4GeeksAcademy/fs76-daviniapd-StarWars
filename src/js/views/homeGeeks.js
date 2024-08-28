import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const HomeGeeks = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1 className="text-danger my-5">Characters</h1>
			<div className="d-flex flex-wrap">
				{store.demo.map((item, index) => {
					return (
						<>
							<div
								key={index}
								className="card me-3"
								style={{ width: "18rem", background: item.background }}>
									<img src="https://placehold.jp/400x200.png" class="card-img-top" alt="imageCard" />
									<div class="card-body mx-2">
										<h5 class="card-titl py-2">{item.title}</h5>
										<p class="card-text pb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<Link to={"/single/" + index}>
										<button type="button" className="btn btn-outline-primary pb-2">Learn more!</button>
										</Link>
										<button className="btn btn btn-outline-warning float-end" onClick={() => actions.changeColor(index, "orange")}>
										<i className="fa-regular fa-heart"></i>
										</button>
									</div>
							</div>
						</>
					);
				})}
			</div>
			<h1 className="text-danger my-5">Planets</h1>

		</div >
	);
};
