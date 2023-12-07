import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";

// Pages
// import AllMeetups from "./pages/AllMeetups";
// import NewMeetup from "./pages/NewMeetup";
// import Favorites from "./pages/Favorites";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
