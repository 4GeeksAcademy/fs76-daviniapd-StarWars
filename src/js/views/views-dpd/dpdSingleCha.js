import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext";

export const DpdSingleCha = () => {
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
        return <div className="container text-center">
            <h1 className="pt-5"><i>Loading...</i></h1>
            <img src="https://cdn.dribbble.com/users/601803/screenshots/2037073/bb8.gif" alt="loading" />
        </div>;
    }


    return (
        <div className="container" style={{ height: "85vh" }}>
            <div className="row">
                <div className="col-6 text-center">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="imageCard" style={{ width: "75%", height: "500px", objectFit: "cover", objectPosition: "top" }} />                </div>
                <div className="col-6 text-center p-5">
                    <h1 className="display-4"><b>{character.properties.name}</b></h1>
                    <p className="fs-2">{character.description}</p>
                </div>
            </div>
            <hr className="border border-danger border-1 my-4 opacity-75" />
            <div className="row">
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Name</b> {character.properties.name}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Birth Year</b> {character.properties.birth_year}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Gender</b> {character.properties.gender}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Height</b>{character.properties.height}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Skin Color</b> {character.properties.skin_color}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Eye Color</b> {character.properties.eye_color}</p>
            </div>

        </div>
    );
};

DpdSingleCha.propTypes = {
    match: PropTypes.object
};