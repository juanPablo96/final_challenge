/* import { useState } from "react"; */

import "./App.css";
import Main from "./Components/Page/Main";

import NavBar from "./Components/NavBar/NavBar";
import Country from "./Components/Page/Country2010";
import MundialBrasil from "./Components/Page/Album2014";
import Fixture from "./Components/Page/Fixture/Fixture";
/* import Collection from "./Components/Page/Collection";
 */
function App() {
  return (
    <>
      <div className="divAppContainer">
        <NavBar />
        {/*  <Fixture /> */}
        <Main />
      </div>
    </>
  );
}

export default App;
