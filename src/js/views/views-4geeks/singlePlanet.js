import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext";

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

    const defaultImageUrl = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnU3dm5qMjlodHJoczY2cW9sZjBxYmVwYjl1eXIwZzRhd2Jjenh3cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3K0D1Dkqh9MOmLSjzW/giphy.webp";

    return (
        <div className="container" style={{ height: "85vh" }}>
            <div className="row">
                <div className="col-6 text-center">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                        className="card-img-top" alt="Not found picture of this planet"
                        style={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "top" }}
                        onError={(e) => e.target.src = defaultImageUrl} />
                </div>
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