import React from "react";

import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Collection from "./Components/Page/Collection.jsx";
import Country2010 from "./Components/Page/Country2010.jsx";
import MundialBrasil from "./Components/Page/Sticker/MundialBrasil.jsx";
import Country2014 from "./Components/Page/Sticker/Country2014.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/myCollection",
    element: <Collection />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/filtered/WorldCup2014",
    element: <MundialBrasil />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/filtered/country/WorldCup2010",
    element: <Country2010 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/filtered/country/WorldCup2014",
    element: <Country2014 />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
