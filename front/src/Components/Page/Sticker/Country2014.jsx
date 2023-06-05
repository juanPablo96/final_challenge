import React from "react";

import { useState, useEffect } from "react";

import Sticker from "./Sticker";
import NavBar from "../../NavBar/NavBar";
const Country2014 = () => {
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    const fetchSticker = async () => {
      var requestOptions = {
        method: "GET",
      };
      try {
        const response = await fetch(
          "http://localhost:8000/api/stickersFiltered/mundial2014",
          requestOptions
        );
        /*  console.log(response); */
        if (response.ok) {
          const data = await response.json();
          setStickers(data);
          /*  console.log(data); */
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSticker();
  }, []);

  return (
    <>
      <NavBar />
      <h1 className="headerApp">Mundial de Brasil 2014</h1>

      {stickers.map((sticker) => {
        /*         console.log(sticker.name); */
        return (
          <div key={sticker.id} className="divCardContainer">
            <Sticker sticker={sticker} />
          </div>
        );
      })}
    </>
  );
};

export default Country2014;
