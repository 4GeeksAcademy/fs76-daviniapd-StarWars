import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { HomeDesigns } from "./views/homeDesigns";
import { HomeGeeks } from "./views/homeGeeks";
import { SingleCharacter } from "./views/singleCharacter";
import { HomeDaviniapd } from "./views/homeDaviniapd";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<HomeDesigns />} />
						<Route path="/homeGeeks" element={<HomeGeeks />} />
						<Route path="/singleCharacter/:id" element={<SingleCharacter />} />
						<Route path="/homeDaviniapd" element={<HomeDaviniapd />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
