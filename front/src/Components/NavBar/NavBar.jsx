import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "../SearchBar/SearchBar";

function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Álbum</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#miColección">Mi Colección</Nav.Link>

          <SearchBar />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
