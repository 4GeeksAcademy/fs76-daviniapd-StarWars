import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { CardCharacters } from "../component/cardCharacters";

import "../../styles/demo.css";


export const HomeGeeks = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1 className="text-danger my-5">Characters</h1>
			<div className="d-flex flex-wrap">
			{store.characters.map((character) => (
          <CardCharacters key={character.uid} name={character.name} gender={character.gender} hair_color={character.hair_color} eye_color={character.eye_color} />
        ))}
			</div>
			<h1 className="text-danger my-5">Planets</h1>

		</div >
	);
};
