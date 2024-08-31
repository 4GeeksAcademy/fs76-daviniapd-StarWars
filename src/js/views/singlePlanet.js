import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = () => {
    const { store, actions } = useContext(Context);
    const [planet, setPlanet] = useState(null);
    const params = useParams();

    useEffect(() => {
        if (store.planets.length === 0) {
            console.log("Loading planets...");
            actions.loadPlanets();
        } else {
            const foundPlanet = store.planets.find(planet => planet.uid === params.id);
            console.log("foundPlanet:", foundPlanet);
            setPlanet(foundPlanet);
        }
    }, [store.planets, params.id]);

    if (!planet) {
        return <div className="container text-center">
            <h1 className="pt-5"><i>Loading...</i></h1>
            <img src="https://cdn.dribbble.com/users/601803/screenshots/2037073/bb8.gif" alt="loading" />
        </div>;
    }

    const planetImage = store.planetImages[planet.properties.name]

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 text-center">
                    <img src={planetImage}   className="card-img-top" alt="imageCard" style={{ width: "75%", height: "500px", objectFit: "cover", objectPosition: "top" }} />                </div>
                <div className="col-6 text-center p-5">
                    <h1 className="display-4"><b>{planet.properties.name}</b></h1>
                    <p className="fs-2">{planet.description}</p>
                </div>
            </div>
            <hr className="border border-danger border-1 my-4 opacity-75" />
            <div className="row">
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Name</b> {planet.properties.name}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Climate</b> {planet.properties.climate}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Population</b> {planet.properties.population}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Orbital Period</b>{planet.properties.orbital_period}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Rotation Period</b> {planet.properties.rotation_period}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Diameter</b> {planet.properties.diameter}</p>
            </div>


        </div>
    );
};

SinglePlanet.propTypes = {
    match: PropTypes.object
};