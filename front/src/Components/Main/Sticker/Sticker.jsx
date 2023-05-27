import React from "react";
import "./sticker.css";
import iniesta from "/spain/iniesta.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";

const Sticker = () => {
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    const fetchSticker = async () => {
      var requestOptions = {
        method: "GET",
      };
      try {
        const response = await fetch(
          "http://localhost:8000/api/stickersAlbum",
          requestOptions
        );
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          setStickers(data);
          console.log(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSticker();
  }, []);

  return (
    <>
      {stickers.map((sticker) => {
        console.log(sticker.name);
        return (
          <div className="divCardContainer">
            {sticker.own ? (
              /************* SI TENGO LA FIGURITA EN LA COLECCION **********/
              <Card
                style={{
                  width: "13rem",
                  marginLeft: "50px",
                  height: "25rem",
                  border: "2px solid",
                  borderColor: `green`,
                }}
              >
                <Card.Img variant="top" src={iniesta} />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    {sticker.name}
                    <span>#{sticker.number}</span>
                  </Card.Title>
                  <Card.Text>{sticker.country}</Card.Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button variant="success" size="lg">
                      Tengo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ) : (
              /************* NO TENGO LA FIGURITA EN LA COLECCION **********/
              <Card
                style={{
                  width: "13rem",
                  marginLeft: "50px",
                  height: "25rem",
                  border: "2px solid",
                  borderColor: "black",
                }}
              >
                <Card.Img variant="top" src={iniesta} />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    {sticker.name}
                    <span>#{sticker.number}</span>
                  </Card.Title>
                  <Card.Text>{sticker.country}</Card.Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button variant="dark" size="lg">
                      No Tengo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Sticker;

/*  Botton de cantidad que cuando haga click se despligue un cartel con la cantidad de figurtias

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function DismissibleExample() {
  const [showA, setShowA] = useState(true);
  

  const toggleShowA = () => setShowA(!showA);
 
  return (
    <Row>
      <Col md={6} className="mb-2">
        <Button onClick={toggleShowA} className="mb-2">
          Toggle Toast <strong>with</strong> Animation
        </Button>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <h3>cantidad </h3>
           
          </Toast.Header>
          <Toast.Body><input/></Toast.Body>
        </Toast>
      </Col>
     
    </Row>
  );
}

export default DismissibleExample; */
