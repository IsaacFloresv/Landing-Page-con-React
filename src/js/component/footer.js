import React from "react";

//create your first component
const Footer = () => {
  return (
    <div class="container-fluid bg-dark text-light" style={{ height: "40px" }}>
      <div className="row text-align-bottom">
        <p className="mx-auto pt-2">Marca Registada - Copyright 2022</p>
      </div>
    </div>
  );
};

export default Footer;
