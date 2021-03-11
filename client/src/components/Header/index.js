import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function Header() {
  return(
    <Jumbotron>
      <h1 class="text-center"> (React) Google Books Search </h1>
      <p class="text-center"> Search for and Save Books of Interest </p>
    </Jumbotron>
  )
};

export default Header;