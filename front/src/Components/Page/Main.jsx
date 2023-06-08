import React from "react";
import "./main.css";
import { Link } from "react-router-dom";

import cover2010 from "../../assets/coverAlbum2010.png";
import cover2014 from "../../assets/coverAlbum2014.png";
const Main = () => {
  return (
    <>
      <Link to="/filtered/WorldCup2010">
        <img
          className="imgCover"
          src={cover2010}
          alt="Portada Albúm Sudáfrica"
        />
      </Link>
      <Link to="/filtered/WorldCup2014">
        <img className="imgCover" src={cover2014} alt="Portada Albúm Brasil" />
      </Link>
    </>
  );
};

export default Main;
