/* import { useState } from "react"; */

import "./App.css";
import Main from "./Components/Page/Main";

import NavBar from "./Components/NavBar/NavBar";
/* import Collection from "./Components/Page/Collection";
 */
function App() {
  return (
    <div className="divAppContainer">
      {/*   <Aside /> */}
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
