import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function NavBar() {
  return (
    <Navbar expand="sm" bg="dark" variant="dark" fixed="top">
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Navbar.Brand href="#home">Álbum</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#miColección">Mi Colección</Nav.Link>

          <ButtonGroup>
            <DropdownButton
              as={ButtonGroup}
              title="Filtrar"
              id="bg-nested-dropdown"
              variant="dark"
              style={{ marginTop: "-7px" }}
            >
              <Dropdown.Item eventKey="1">País</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>

          <SearchBar />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
