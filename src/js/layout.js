import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { HomeDesigns } from "./views/homeDesigns";
import { HomeGeeks } from "./views/views-4geeks/homeGeeks";
import { SingleCharacter } from "./views/views-4geeks/singleCharacter";
import { SinglePlanet } from "./views/views-4geeks/singlePlanet";
import { SingleVehicle } from "./views/views-4geeks/singleVehicle";
import { HomeDaviniapd } from "./views/views-dpd/homeDaviniapd";
import { DpdSingleCha } from "./views/views-dpd/dpdSingleCha";
import injectContext from "./store/appContext";

import { Navbar } from "./component/components-4geeks/navbar";
import { Footer } from "./component/components-4geeks/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<HomeDesigns />} />
						<Route path="/homeGeeks" element={<HomeGeeks />} />
						<Route path="/singleCharacter/:id" element={<SingleCharacter />} />
						<Route path="/singlePlanet/:id" element={<SinglePlanet />} />
						<Route path="/singleVehicle/:id" element={<SingleVehicle />} />
						<Route path="/homeDaviniapd" element={<HomeDaviniapd />} />
						<Route path="/dpdSingleCha/:id" element={<DpdSingleCha />} />
						<Route path="*" element={<div className="text-center mx-auto my-auto mt-5"> <h1>Not found in this galaxy!</h1><img src="https://cdn.dribbble.com/users/601803/screenshots/2037073/bb8.gif" alt="loading" /> </div>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
