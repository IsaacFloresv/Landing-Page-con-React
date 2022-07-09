import React from "react";

//include images into your bundle
import Carousel from "./carousel";
import Jumbotron from "./jumbotron";

//create your Container_top component
function Container_top(props){
	return <div className="container">
			<Carousel/>,
			<Jumbotron/>
		</div>
};

export default Container_top;
