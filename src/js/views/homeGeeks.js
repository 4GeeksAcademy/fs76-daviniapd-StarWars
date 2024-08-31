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
            <h1 className="text-danger my-3">Characters</h1>
            <div className="row flex-nowrap" style={{ overflowX: "auto", maxWidth: "100vw" }}>
                {store.characters.map((character, index) => (
                    <div className="col-12 col-md-6 col-lg-3" key={index}>
                        <CardCharacters
                            name={character.properties.name}
                            gender={character.properties.gender}
                            hair_color={character.properties.hair_color}
                            eye_color={character.properties.eye_color}
                            uid={character.uid}
                        />
                    </div>
                ))}
            </div>
            <h1 className="text-danger my-3">Planets</h1>
        </div>
    );
};