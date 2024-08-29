import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardCharacters } from "../component/cardCharacters";
import "../../styles/demo.css";

export const HomeGeeks = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadCharacters();
    }, []);

    return (
        <div className="container">
            <h1 className="text-danger my-5">Characters</h1>
            <div className="d-flex flex-wrap">
                {store.characters.map((character, index) => (
                    <CardCharacters
                        key={index}
                        name={character.properties.name}
                        gender={character.properties.gender}
                        hair_color={character.properties.hair_color}
                        eye_color={character.properties.eye_color}
                        uid={character.uid}
                    />
                ))}
            </div>
            <h1 className="text-danger my-5">Planets</h1>
        </div>
    );
};