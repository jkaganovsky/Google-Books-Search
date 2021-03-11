import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function GlobalNavbar() {
  return(
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Google Books</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Search Books</Nav.Link>
        <Nav.Link href="/saved">Saved Books</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default GlobalNavbar;