import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardCharacters } from "../component/cardCharacters";
import { CardPlanets } from "../component/cardPlanets";
import { CardStarships } from "../component/cardStarships";
import "../../styles/demo.css";

export const HomeGeeks = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadCharacters();
        actions.loadPlanets();
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
            <h1 className="text-danger my-3">Starships</h1>
            <div className="row flex-nowrap" style={{ overflowX: "auto", maxWidth: "100vw" }}>
                {store.starships.map((starship, index) => (
                    <div className="col-12 col-md-6 col-lg-3" key={index}>
                        <CardStarships
                            name={starship.properties.name}
                            cost_in_credits={starship.properties.cost_in_credits}
                            passengers={starship.properties.passengers}
                            uid={starship.uid}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};