import React from "react";

//create your Card component
const Card = (props) =>{
  return <div classname="card" style="width: 18rem;">
      <img src="..." classname="card-img-top" alt="..." />
      <div classname="card-body">
        <h5 classname="card-title">Card title</h5>
        <p classname="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" classname="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
};

export default Card;
