import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
// import { DpdCharacters } from "../../component/components-dpd/dpdCharacters";

// import "../../../styles/homedpd.css"

// export const HomeDaviniapd = () => {
//     const { store, actions } = useContext(Context);

//     useEffect(() => {
//         actions.loadCharacters();
//         actions.loadPlanets();
//         actions.loadVehicles();
//     }, []);


//     return (
//         <div className="container mb-5">
//             <h1 className="my-3">Characters</h1>
//             <div className="row flex-nowrap" style={{ overflowX: "auto", maxWidth: "100vw" }}>
//                 {store.characters.map((character, index) => (
//                     <div className="col-12 col-md-6 col-lg-3" key={index}>
//                         <DpdCharacters
//                             name={character.properties.name}
//                             gender={character.properties.gender}
//                             hair_color={character.properties.hair_color}
//                             eye_color={character.properties.eye_color}
//                             uid={character.uid}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };









export const HomeDaviniapd = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="d-flex justify-content-center align-items-center h-100 flex-column mt-5">
				<h1 className="text-center my-3 p-5 bg-warning" id="titleHomr"><i className="fa-solid fa-radiation"></i>  UNDER CONSTRUCTION  <i className="fa-solid fa-radiation"></i></h1>
				<img src="https://cdn.dribbble.com/users/601803/screenshots/2037073/bb8.gif" alt="loading" />
			</div>

		</>
	);
};