import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import { DpdNavbar } from "../../component/components-dpd/dpdNavbar";

export const DpdSinglePla = () => {
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
                    id="cardSingleDpd">
                    <div className="row">
                        <div className="col-6 text-center" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card_load" alt="imageCard" style={{ width: "75%", height: "85%", objectFit: "cover", objectPosition: "top" }} />
                        </div>
                        <div className="col-5 text-center card_load_extreme_title" style={{ display: "flex", alignItems: "center",justifyContent: "center", flexDirection: "column" }}>
                            <h1 className="display-5 p-5"><b>{planet.properties.name}</b> </h1>
                            <p className="fs-2 text-white" style={{fontFamily: "sans-serif" }}>{planet.description}</p>
                        </div>
                    </div>
                    <div className="card_load_extreme_descripion d-flex mt-4">
                        <p className="col-2 text-center d-flex flex-column fs-4"><b>Name</b> {planet.properties.name}</p>
                        <p className="col-2 text-center d-flex flex-column fs-4"><b>Climate</b> {planet.properties.climate}</p>
                        <p className="col-2 text-center d-flex flex-column fs-4"><b>Population</b>{planet.properties.population}</p>
                        <p className="col-2 text-center d-flex flex-column fs-4"><b>Orbital Period</b> {planet.properties.orbital_period}</p>
                        <p className="col-2 text-center d-flex flex-column fs-4"><b>Rotation Period</b> {planet.properties.rotation_period}</p>
                        <p className="col-2 text-center d-flex flex-column fs-4"><b>Diameter</b> {planet.properties.diameter}</p>
                    </div>
                </div>
            </div>


        </>
    );
};

DpdSinglePla.propTypes = {
    match: PropTypes.object
};