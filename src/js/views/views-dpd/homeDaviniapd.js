import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { DpdCharacters } from "../../component/components-dpd/dpdCharacters";
import { DpdPlanets } from "../../component/components-dpd/dpdPlanets";

import "../../../styles/homedpd.css"

export const HomeDaviniapd = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadCharacters();
		actions.loadPlanets();
		actions.loadVehicles();
	}, []);


	return (
		<div className="full-screen-bg" id="bodyHomedDpd">
			<div className="w-100 p-5" style={{
				backgroundImage: "url(https://lumiere-a.akamaihd.net/v1/images/image_2f7ca5d1.jpeg)",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
				width: "100%"
			}} >
				<div className="container mb-5" >
					<h1 className="my-3" id="categoryTitle">Characters</h1>
					<div className="row flex-nowrap pb-3" style={{ overflowX: "auto" }}>
						{store.characters.map((character, index) => (
							<div className="col-12 col-md-6 col-lg-3" key={index}>
								<DpdCharacters
									name={character.properties.name}
									gender={character.properties.gender}
									hair_color={character.properties.hair_color}
									eye_color={character.properties.eye_color}
									uid={character.uid}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="w-100 p-5" style={{
				backgroundImage: "url(https://lumiere-a.akamaihd.net/v1/images/star-wars-backgrounds-08_c6531d30.jpeg)",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
				width: "100%"
			}} >
				<div className="container mb-5" >
					<h1 className="my-3" id="categoryTitle">Planets</h1>
					<div className="row flex-nowrap pb-3" style={{ overflowX: "auto" }}>
						{store.planets.map((planet, index) => (
							<div className="col-12 col-md-6 col-lg-3" key={index}>
								<DpdPlanets
									name={planet.properties.name}
									population={planet.properties.population}
									terrain={planet.properties.terrain}
									climate={planet.properties.climate}
									uid={planet.uid}
								/>
							</div>
						))}
					</div>
				</div>
			</div>


			<h1 className="text-center bg-warning p-5" id="titleHomr">	<Link to="/" className="mx-2">
				<button className="btn btn-outline-secondary mx-5">Select Design</button>
			</Link><i className="fa-solid fa-radiation"></i>  UNDER CONSTRUCTION  <i className="fa-solid fa-radiation"></i> </h1>
		</div>
	);
};

// export const HomeDaviniapd = () => {
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<>
// 			<div className="d-flex justify-content-center align-items-center h-100 flex-column mt-5">
// 				<h1 className="text-center my-3 p-5 bg-warning" id="titleHomr"><i className="fa-solid fa-radiation"></i>  UNDER CONSTRUCTION  <i className="fa-solid fa-radiation"></i></h1>
// 				<img src="https://cdn.dribbble.com/users/601803/screenshots/2037073/bb8.gif" alt="loading" />
// 			</div>

// 		</>
// 	);
// };
