import React, { useContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducers/cartReducer";

const Context = React.createContext();
const CartContext = ({ children, value }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, localStorage["cart"] ? JSON.parse(localStorage["cart"]) : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState]);
  return <Context.Provider value={{ cartState, dispatchCart, ...value }}>{children}</Context.Provider>;
};

const useCartContext = () => {
  return useContext(Context);
};

export { CartContext, useCartContext };
