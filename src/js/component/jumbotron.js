import React from "react";

//create your Jumbotron component
function Jumbotron(props){
  return <div classname="jumbotron">
      <h1 classname="display-4">Hello, world!</h1>
      <p classname="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr classname="my-4" />
      <p>
        It uses utility classnamees for typography and spacing to space content out
        within the larger container.
      </p>
      <a classname="btn btn-primary btn-lg" href="#" role="button">
        Learn more
      </a>
    </div>
};

export default Jumbotron;
