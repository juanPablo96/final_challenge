import React from "react";

import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Collection from "./Components/Page/Collection.jsx";
import Country2010 from "./Components/Page/Country2010.jsx";
import Country2014 from "./Components/Page/Country2014.jsx";
import Album2014 from "./Components/Page/Album2014.jsx";
import Album2010 from "./Components/Page/Album2010.jsx";

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
    path: "/filtered/WorldCup2010",
    element: <Album2010 />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/filtered/WorldCup2014",
    element: <Album2014 />,
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
