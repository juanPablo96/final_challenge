/* import { useState } from "react"; */

import "./App.css";
import Main from "./Components/Page/Main";

import NavBar from "./Components/NavBar/NavBar";
import Country from "./Components/Page/Country";
/* import Collection from "./Components/Page/Collection";
 */
function App() {
  return (
    <>
      <h1 className="headerApp">Mundial de Sudáfrica 2010</h1>
      <div className="divAppContainer">
        {/*   <Aside /> */}
        <NavBar />

        <Main />
      </div>
    </>
  );
}

export default App;
