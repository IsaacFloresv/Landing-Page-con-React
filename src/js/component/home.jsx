import React from "react";
import { render } from "react-dom";

//include your import components
import Navbar from "./navbar";
import Container_top from "./container_top.js";
import Container_bottom from "./container_bottom.js";
import Footer from "./footer.js";

//create your home component
const Home = () => {
	return (
		<div className="container text-center">
			<Navbar/>
			<Container_top/>
			<Container_bottom/>
			<Footer/>
		</div>
	);
};

export default Home;
