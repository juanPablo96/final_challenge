import React from "react";
import trophy from "../../assets/trophy.jpeg";
import "./navBar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "./SearchBar/SearchBar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function NavBar() {
  /* 
  function handleChange(e) {
      e.preventDefault(); 
    console.log(e.target.value);
    props.setPokedex(
      Pokedex.filter((item) => {
        return item.Name.toLowerCase().includes(e.target.value);
      })
    );
  }
   ************* FILTRO NOMBRE ********** 
  const onclickName = () => {
    console.log("pepito");
    const orderName = sticker.country.sort((a, b) => {
      if (a.Name < b.Name) {
        return -1;
      }
      if (a.Name > b.Name) {
        return 1;
      }
      // a debe ser igual b
      return 0;
    });
    console.log(orderName);
    props.setPokedex([...orderName]);
  };

  

  const showSort = () => {
    setClickButton(!clickButton); 
    }
 */

  return (
    <Navbar expand="sm" bg="dark" variant="dark" fixed="top">
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Navbar.Brand href="#Album">
          <img src={trophy} className="imgNavBar" alt="copa del mundo" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <ButtonGroup>
            <DropdownButton
              as={ButtonGroup}
              title="Albums"
              id="bg-nested-dropdown"
              variant="dark"
              style={{ marginTop: "-7px" }}
            >
              <Dropdown.Item eventKey="1" to="/" as={Link}>
                Mundial 2010
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="2"
                to="/filtered/mundialBrasil2014"
                as={Link}
              >
                Mundial 2014
              </Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
          <Nav.Link to="/myCollection" as={Link}>
            Mi Colección
          </Nav.Link>

          <ButtonGroup>
            <DropdownButton
              as={ButtonGroup}
              title="Filtrar"
              id="bg-nested-dropdown"
              variant="dark"
              style={{ marginTop: "-7px" }}
            >
              <Dropdown.Item eventKey="1" to="/filtered/country" as={Link}>
                País
              </Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>

          <SearchBar />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
