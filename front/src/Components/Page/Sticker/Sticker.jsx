import React from "react";
import "./sticker.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

const Sticker = (props) => {
  const [clickButton, setClickButton] = useState(false);

  const [quantity, setQuantity] = useState(props.sticker.quantity);
  const buttonAdd = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ id: props.sticker.id, quantity: quantity });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    console.log(raw);
    fetch("http://localhost:8000/api/quantity", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const changeInput = (e) => {
    setQuantity(e.target.value);
  };

  const showSort = () => {
    setClickButton(!clickButton);
  };
  return (
    <>
      <Card
        key={props.sticker.id}
        style={{
          width: "13rem",
          marginLeft: "50px",
          height: "29rem",
          border: "2px solid",
          borderColor: `green`,
        }}
      >
        <Card.Img variant="top" src={`${props.sticker.img}`} />
        <Card.Body>
          <Card.Title
            style={{
              fontSize: "18px",
            }}
          >
            {props.sticker.name}
            <span>#{props.sticker.number}</span>
          </Card.Title>
          <Card.Text>{props.sticker.country}</Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {props.sticker.own && props.sticker.quantity > 0 ? (
              <Button variant="success" size="lg" onClick={showSort}>
                Tengo
              </Button>
            ) : (
              <Button variant="dark" size="lg" onClick={showSort}>
                No Tengo
              </Button>
            )}
          </div>

          <InputGroup
            className="mb-3"
            style={{
              padding: "8px",
            }}
          >
            {clickButton ? (
              <div>
                <h6>Cantidad:</h6>
                <Button variant="primary" onClick={buttonAdd}>
                  Guardar
                </Button>
                <Form.Control
                  style={{
                    display: "inline",
                    width: "60px",
                    marginLeft: "5px",
                  }}
                  defaultValue={quantity}
                  onChange={changeInput}
                  type="number"
                />
              </div>
            ) : null}
          </InputGroup>
        </Card.Body>
      </Card>
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
