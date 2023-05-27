/* import { useState } from "react"; */

import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  /*   const [count, setCount] = useState(0); */

  return (
    <div className="divAppContainer">
      {/*   <Aside /> */}
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
