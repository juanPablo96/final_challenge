import React from "react";
import "./sticker.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";

const Sticker = (props) => {
  const [own, setOwn] = useState(props.sticker.own);
  const [clickButton, setClickButton] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [quantity, setQuantity] = useState(props.sticker.quantity);
  const buttonAdd = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id: props.sticker.id,
      quantity: quantity,
      own: own,
    });

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

    setShow(true);
  };

  /*   para cambiar la cantidad de firguritas en la BD y para cmbiar el estado de "own" en la BD */
  const changeInput = (e) => {
    /*  setQuantity(e.target.value); */
    /*  console.log(setQuantity(parseInt(e.target.value)) == 0); */

    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0 && own === false) {
      setOwn(true);
    }
    if (newQuantity === 0 && own === true) {
      setOwn(false);
    }
    setQuantity(newQuantity);

    /*    if (setQuantity(parseInt(e.target.value)) >= 1) {
      console.log(e.target.value);
      setOwn(true);
    }
    if (setQuantity(parseInt(e.target.value)) == 0) {
      setOwn(false);
    } else {
      setOwn(true);
    } */
  };

  const showSort = () => {
    setClickButton(!clickButton);
  };
  return (
    <>
      <Card
        className="cardStyles"
        /*  style={{
          width: "13rem",
          marginLeft: "50px",
          height: "29rem",
          border: "2px solid",
          borderColor: `green`,
        }} */
      >
        <Card.Img
          className="cardImgStyles"
          width={100}
          height={220}
          alt="171x180"
          variant="top"
          src={`${props.sticker.img}`}
        />
        <Card.Body>
          <Card.Title
            style={{
              fontSize: "17px",
            }}
          >
            {props.sticker.name}
            <span>#{props.sticker.number}</span>
          </Card.Title>

          <Card.Text>
            {props.sticker.category}
            <br />
            {props.sticker.country}
          </Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {props.sticker.quantity >= 1 ? (
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

                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Cantidad de Figurtias Guardadas con Éxito 😁
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <span role="img" aria-label="smile">
                      Actualiza la página para ver tus cambios
                    </span>
                  </Modal.Body>
                </Modal>

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
