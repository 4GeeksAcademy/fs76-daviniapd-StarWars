import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = () => {
    const { store, actions } = useContext(Context);
    const [vehicle, setVehicle] = useState(null);
    const params = useParams();

    useEffect(() => {
        if (store.vehicles.length === 0) {
            console.log("Loading vehicles...");
            actions.loadVehicles();
        } else {
            const foundVehicle = store.vehicles.find(vehicle => vehicle.uid === params.id);
            console.log("foundVehicle:", foundVehicle);
            setVehicle(foundVehicle);
        }
    }, [store.tarships, params.id]);

    if (!vehicle) {
        return <div className="container text-center">
            <h1 className="pt-5"><i>Loading...</i></h1>
            <img src="https://cdn.dribbble.com/users/601803/screenshots/2037073/bb8.gif" alt="loading" />
        </div>;
    }

    return (
        <div className="container" style={{height: "85vh"}}>
            <div className="row">
                <div className="col-6 text-center">
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}   className="card-img-top" alt="imageCard" style={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "top" }} />                </div>
                <div className="col-6 text-center p-5">
                    <h1 className="display-4"><b>{vehicle.properties.name}</b></h1>
                    <p className="fs-2">{vehicle.description}</p>
                </div>
            </div>
            <hr className="border border-danger border-1 my-4 opacity-75" />
            <div className="row">
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Name</b> {vehicle.properties.name}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>vehicle Class</b> {vehicle.properties.vehicle_class}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Manufacturer</b> {vehicle.properties.manufacturer}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Passengers</b>{vehicle.properties.passengers}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Crew</b> {vehicle.properties.crew}</p>
                <p className="col-2 text-danger text-center d-flex flex-column fs-4"><b>Consumables</b> {vehicle.properties.consumables}</p>
            </div>


        </div>
    );
};

SingleVehicle.propTypes = {
    match: PropTypes.object
};