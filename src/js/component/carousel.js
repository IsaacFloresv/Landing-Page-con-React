import React from "react";

//create your carousel component
function Carousel(props){
  return <div
      id="carouselExampleCaptions"
      classname="carousel slide"
      data-ride="carousel"
    >
      <ol classname="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          classname="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div classname="carousel-inner">
        <div classname="carousel-item active">
          <img src="..." classname="d-block w-100" alt="..." />
          <div classname="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div classname="carousel-item">
          <img src="..." classname="d-block w-100" alt="..." />
          <div classname="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div classname="carousel-item">
          <img src="..." classname="d-block w-100" alt="..." />
          <div classname="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        classname="carousel-control-prev"
        type="button"
        data-target="#carouselExampleCaptions"
        data-slide="prev"
      >
        <span classname="carousel-control-prev-icon" aria-hidden="true"></span>
        <span classname="sr-only">Previous</span>
      </button>
      <button
        classname="carousel-control-next"
        type="button"
        data-target="#carouselExampleCaptions"
        data-slide="next"
      >
        <span classname="carousel-control-next-icon" aria-hidden="true"></span>
        <span classname="sr-only">Next</span>
      </button>
    </div>

};

export default Carousel;
