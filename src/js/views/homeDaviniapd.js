import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const HomeDaviniapd = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="d-flex justify-content-center align-items-center h-100 flex-column m-5">
				<h1 className="text-center my-3 p-5 bg-warning" id="titleHomr"><i className="fa-solid fa-radiation"></i>  UNDER CONSTRUCTION  <i className="fa-solid fa-radiation"></i></h1>
				<img src="https://cdn.dribbble.com/users/601803/screenshots/2037073/bb8.gif" alt="loading" />
			</div>

		</>
	);
};