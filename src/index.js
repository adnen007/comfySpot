import React from "react"; // A library is a JavaScript file(or files)
//that contains a bunch of functions that simplifies complicated tasks
import ReactDOM from "react-dom/client";
import "./normalize.css";
import "./index.css";
import SharedPage from "./pages/SharedPage.js";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SharedPage />
  </BrowserRouter>
);
