import React from "react";
import "./aside.css";
import SearchBar from "../SearchBar/SearchBar";

function Aside() {
  return (
    <>
      <div className="divAsideContainer">
        <SearchBar />
        <h2 id="firstHeader">Figuritas</h2>
        <h2 id="secondHeader">Mi Colección</h2>
      </div>
    </>
  );
}

export default Aside;
