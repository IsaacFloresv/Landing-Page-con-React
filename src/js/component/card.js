import React from "react";

//create your Card component
const Card = (props) =>{
  let stylecard = {width: "auto"};
  return <div className="card" style={stylecard}>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.Lorem}
        </p>
        <a href="#" className={props.btn}>
          {props.Adj}
        </a>
      </div>
    </div>
};

export default Card;
