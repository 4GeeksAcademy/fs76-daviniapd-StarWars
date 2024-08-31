import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleStarship = () => {
    const { store, actions } = useContext(Context);
    const [starship, setStarship] = useState(null);
    const params = useParams();

    useEffect(() => {
        if (store.starships.length === 0) {
            console.log("Loading starships...");
            actions.loadStarships();
        } else {
            const foundStarship = store.starships.find(starship => starship.uid === params.id);
            console.log("foundStarship:", foundStarship);
            setStarship(foundStarship);
        }
    }, [store.tarships, params.id]);

    if (!starship) {
        return <div className="container text-center">
            <h1 className="pt-5"><i>Loading...</i></h1>
            <img src="https://cdn.dribbble.com/users/601803/screenshots/2037073/bb8.gif" alt="loading" />
        </div>;
    }

    const starshipImage = store.starshipImages[starship.properties.name]

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 text-center">
                    <img src={starshipImage}  className="card-img-top" alt="imageCard" style={{ width: "100%", height: "450px", objectFit: "cover", objectPosition: "top" }} />                </div>
                <div className="col-6 text-center p-5">
                    <h1 className="display-4"><b>{starship.properties.name}</b></h1>
                    <p className="fs-2">{starship.description}</p>
                </div>
            </div>
            <hr className="border border-danger border-1 my-4 opacity-75" />
            <div className="row">
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Name</b> {starship.properties.name}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Starship Class</b> {starship.properties.starship_class}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Manufacturer</b> {starship.properties.manufacturer}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Passengers</b>{starship.properties.passengers}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Crew</b> {starship.properties.crew}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Consumables</b> {starship.properties.consumables}</p>
            </div>


        </div>
    );
};

SingleStarship.propTypes = {
    match: PropTypes.object
};