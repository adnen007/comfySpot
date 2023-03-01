import React from "react";
import ReactDOM from "react-dom/client";
import "./normalize.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MainContext } from "./contexts/mainContext";
import { FilterContext } from "./contexts/filterContext";
import { CartContext } from "./contexts/cart";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <MainContext>
      <FilterContext>
        <CartContext>
          <App />
        </CartContext>
      </FilterContext>
    </MainContext>
  </BrowserRouter>
);
