import React from "react";
import Sticker from "./Sticker/Sticker";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
const Collection = () => {
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    const fetchSticker = async () => {
      var requestOptions = {
        method: "GET",
      };
      try {
        const response = await fetch(
          "http://localhost:8000/api/showMyStickers",
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
      {stickers.map((sticker) => {
        /*         console.log(sticker.name); */
        return (
          <div className="divCardContainer">
            <Sticker sticker={sticker} />
          </div>
        );
      })}
    </>
  );
};

export default Collection;
