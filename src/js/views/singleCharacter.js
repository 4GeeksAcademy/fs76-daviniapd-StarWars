import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacter = () => {
    const { store, actions } = useContext(Context);
    const [character, setCharacter] = useState(null);
    const params = useParams();

    useEffect(() => {
        if (store.characters.length === 0) {
            console.log("Loading characters...");
            actions.loadCharacters();
        } else {
            const foundCharacter = store.characters.find(character => character.uid === params.id);
            console.log("foundCharacter:", foundCharacter);
            setCharacter(foundCharacter);
        }
    }, [store.characters, params.id]);

    if (!character) {
        return <div>Loading...</div>;
    }

    return (
        <div className="jumbotron m-5">
            <h1 className="display-4">Single Character</h1>
            <p>Name: {character.properties.name}</p>
            <p>Birth Year: {character.properties.birth_year}</p>
            <p>Gender: {character.properties.gender}</p>
            <p>Height: {character.properties.height}</p>
            <p>Skin Color: {character.properties.skin_color}</p>
            <p>Eye Color: {character.properties.eye_color}</p>

            <hr className="my-4" />
        </div>
    );
};

SingleCharacter.propTypes = {
    match: PropTypes.object
};