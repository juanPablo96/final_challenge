import React from "react";
import trophy from "../../assets/trophy.jpeg";
import "./navBar.css";
import { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "./SearchBar/SearchBar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import Sticker from "../Page/Sticker/Sticker";

function NavBar() {
  /* const [input, setInput] = useState("");
  const [stickers, setStickers] = useState([]);
  const [stickersFiltrados, setStickersFiltrados] = useState([]);

  const onChange = async (event) => {
    const inputValue = event.target.value.toLowerCase();

    setInput(inputValue);

    var requestOptions = {
      method: "GET",

      redirect: "follow",
    };

    console.log(input);
    try {
      const response = await fetch(
        `http://localhost:8000/api/sticker/${input}`,
        requestOptions
      );

      console.log(response);
      if (response.ok) {
        const response = await response.json();
        setStickers(response);

        const filtradas = response.stickers.filter((sticker) => {
          const name = sticker.name.toLowerCase();

          return name.includes(inputValue);
        });

        setStickersFiltrados(filtradas);
      } else {
        alert("ocurrió un error del lado del cliente");
      }
    } catch (error) {
      alert(error.message);
    }
  }; */

  return (
    <Navbar expand="sm" bg="dark" variant="dark" fixed="top">
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Navbar.Brand href="#Album" to="/" as={Link}>
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
              <Dropdown.Item eventKey="1" to="/filtered/WorldCup2010" as={Link}>
                Mundial 2010
              </Dropdown.Item>
              <Dropdown.Item eventKey="2" to="/filtered/WorldCup2014" as={Link}>
                Mundial 2014
              </Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>

          <ButtonGroup>
            <DropdownButton
              as={ButtonGroup}
              title="Filtrar"
              id="bg-nested-dropdown"
              variant="dark"
              style={{ marginTop: "-7px" }}
            >
              <Dropdown.Item
                eventKey="1"
                to="/filtered/country/WorldCup2010"
                as={Link}
              >
                País Mundial 2010
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="2"
                to="/filtered/country/WorldCup2014"
                as={Link}
              >
                País Mundial 2014
              </Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
          <Nav.Link to="/myCollection" as={Link}>
            Mi Colección
          </Nav.Link>

          <SearchBar /* onChange={onChange}  */ />
          {/* {stickersFiltrados.length > 0 ? (
            stickersFiltrados.map((sticker) => {
              return (
                <div key={sticker.id} className="divCardContainer">
                  <Sticker sticker={sticker} />
                </div>
              );
            })
          ) : (
            <div id="no-results">No se encontraron stickers.</div>
          )}*/}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
