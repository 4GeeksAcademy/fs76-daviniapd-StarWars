import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const HomeDesigns = () => {
	const { store, actions } = useContext(Context);

	return (
	<div className="full-screen-bg" id="homeDesigns">

	<div className="d-flex justify-content-center align-items-center h-50 flex-column">
	<h1 className="text-center" id="titleHome">CHOOSE YOUR CONTACT LIST EXPERIENCE</h1>
        <div className="mt-4">
          <Link to="/homeDaviniapd">
            <span className="btn btn-lg me-4" id="button-dpd" role="button">
              daviniapd Design
            </span>
          </Link>
          <Link to="/homeGeeks">
            <span className="btn btn btn-lg" id="button-4geeks" role="button">
              4geeks Design
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

