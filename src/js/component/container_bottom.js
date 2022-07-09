import React from "react";

//include images into your bundle
import Card from "./card";

//create your first component
function Container_bottom(props) {
	//let Card_1 = Card = (Image) => "https://placekitten.com/200/283";
	//let Card_2 = Card = (Image) => "https://placekitten.com/200/284";
	//let Card_3 = Card = (Image) => "https://placekitten.com/200/285";
  return (
    <div className="container">
      <div className="row w-3">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Container_bottom;
