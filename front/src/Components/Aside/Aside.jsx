import React from "react";
/* import iniesta from "../../assets/iniesta.png"; */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Aside() {
  return (
    <Card style={{ width: "12rem", marginLeft: "50px", height: "25rem" }}>
      <Card.Img variant="top" /* src={iniesta} */ />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>España</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Aside;
