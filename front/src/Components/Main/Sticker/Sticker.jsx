import React from "react";
/* import iniesta from "../../assets/iniesta.png"; */
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
          <Card style={{ width: "12rem", marginLeft: "50px", height: "25rem" }}>
            <Card.Img variant="top" /* src={iniesta} */ />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>{sticker.name}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default Sticker;
