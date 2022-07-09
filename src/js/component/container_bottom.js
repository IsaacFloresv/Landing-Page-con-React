import React from "react";

//include images into your bundle
import Card from "./card";

//create your first component
function Container_bottom() {


  ;return (	
    <div className="container text-center">
      <div className="row ">
        <div className="col-4">
          <Card 
            img="https://placekitten.com/200/283"
            title = "Gato Amarillo con blanco"
            Lorem = "Lorem ipsum dolor sit amet."
            btn = "btn btn-primary"
            Adj = "Me gusta"
            /></div>
        <div className="col-4"> 
          <Card 
            img="https://placekitten.com/200/284"
            title = "Gato Gris con Amarillo"
            Lorem = "Lorem ipsum dolor sit amet consectetur."
            btn = "btn btn-danger"
            Adj = "Me encanta"
          />
        </div>
        <div className="col-4">
          <Card 
            img="https://placekitten.com/200/285"
            title = "Gato Patas Blancas"
            Lorem = "Lorem olorem fugit pariatur dicta et natus?"
            btn = "btn btn-success"
            Adj = "Precioso"
            />
        </div>
      </div>
    </div>
  );
}

export default Container_bottom;
