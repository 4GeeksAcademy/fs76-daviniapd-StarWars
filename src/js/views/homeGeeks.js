import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardCharacters } from "../component/cardCharacters";
import { CardPlanets } from "../component/cardPlanets";
import { CardVehicles } from "../component/cardVehicles";
import SearchBar from "../component/searchBar";
import "../../styles/demo.css";

export const HomeGeeks = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadCharacters();
        actions.loadPlanets();
        actions.loadVehicles();
    }, []);


    return (
        <div className="container">
            <SearchBar />
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
            <div className="row flex-nowrap" style={{ overflowX: "auto", maxWidth: "100vw" }}>
                {store.planets.map((planet, index) => (
                    <div className="col-12 col-md-6 col-lg-3" key={index}>
                        <CardPlanets
                            name={planet.properties.name}
                            population={planet.properties.population}
                            terrain={planet.properties.terrain}
                            uid={planet.uid}
                        />
                    </div>
                ))}
            </div>
            <h1 className="text-danger my-3">Vehicles</h1>
            <div className="row flex-nowrap" style={{ overflowX: "auto", maxWidth: "100vw" }}>
                {store.vehicles.map((vehicle, index) => (
                    <div className="col-12 col-md-6 col-lg-3" key={index}>
                        <CardVehicles
                            name={vehicle.properties.name}
                            cost_in_credits={vehicle.properties.cost_in_credits}
                            passengers={vehicle.properties.passengers}
                            uid={vehicle.uid}
                        />
                    </div>
                ))}
            </div>
            <span className="row w-100 my-5"></span>
        </div>

    );
};