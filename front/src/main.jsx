import React from "react";

import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Collection from "./Components/Page/Collection.jsx";
import Country from "./Components/Page/Country.jsx";
import MundialBrasil from "./Components/Page/Sticker/MundialBrasil.jsx";

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
    path: "/filtered/country",
    element: <Country />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/filtered/mundialBrasil2014",
    element: <MundialBrasil />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
