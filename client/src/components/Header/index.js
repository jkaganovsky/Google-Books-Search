import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function Header() {
  return(
    <div className="p-2">

      <Jumbotron>
        <h1 className="text-center"> (React) Google Books Search </h1>
        <p className="text-center"> Search for and Save Books of Interest </p>
      </Jumbotron>

    </div>
  )
};

export default Header;