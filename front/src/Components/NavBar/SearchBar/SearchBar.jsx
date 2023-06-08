import React from "react";
import "./searchBar.css";

function SearchBar(props) {
  return (
    <>
      <div>
        <input
          type="search"
          className="inputSearchBar"
          onChange={props.onChange}
        />
      </div>
    </>
  );
}

export default SearchBar;
