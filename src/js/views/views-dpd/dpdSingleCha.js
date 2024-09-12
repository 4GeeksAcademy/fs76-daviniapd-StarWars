import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import { DpdNavbar } from "../../component/components-dpd/dpdNavbar";

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
        <>
            <DpdNavbar />
            <div className="full-screen-bg" id="bodySingleChaDpd" style={{
                backgroundImage: "url(https://lumiere-a.akamaihd.net/v1/images/star-wars-backgrounds-01_f5aa33a9.jpeg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: "90%",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
            }}>
            </div>
            <div style={{ position: "relative", height: "80vh" }}>
                <div className="container card p-4 m-5"
                    id="cardSingleDpd"
                    style={{
                        position: "absolute",
                        top: "20%",
                        left: "50%",
                        transform: "translate(-50%, -10%)",
                        width: "100%",
                    }}>
                    <div className="row">
                        <div className="col-6 text-center" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card_load" alt="imageCard" style={{ width: "75%", height: "85%", objectFit: "cover", objectPosition: "top" }} />
                        </div>
                        <div className="col-5 text-center card_load_extreme_title" style={{ display: "flex", alignItems: "center",justifyContent: "center", flexDirection: "column" }}>
                            <h1 className="display-5 p-5"><b>{character.properties.name}</b> </h1>
                            <p className="fs-2 text-white" style={{fontFamily: "sans-serif" }}>{character.description}</p>
                        </div>
                    </div>
                    <div className="card_load_extreme_descripion d-flex mt-4">
                        <p className="col-2 text-center d-flex flex-column fs-4"><b>Name</b> {character.properties.name}</p>
                        <p className="col-2 text-center d-flex flex-column fs-4"><b>Birth Year</b> {character.properties.birth_year}</p>
                        <p className="col-2 text-center d-flex flex-column fs-4"><b>Gender</b> {character.properties.gender}</p>
                        <p className="col-2 text-center d-flex flex-column fs-4"><b>Height</b>{character.properties.height}</p>
                        <p className="col-2 text-center d-flex flex-column fs-4"><b>Skin Color</b> {character.properties.skin_color}</p>
                        <p className="col-2 text-center d-flex flex-column fs-4"><b>Eye Color</b> {character.properties.eye_color}</p>
                    </div>
                </div>
            </div>


        </>
    );
};

DpdSingleCha.propTypes = {
    match: PropTypes.object
};