import React, { useContext } from "react";
import { useReducer } from "react";
import { productsReducer } from "../reducers/productReducer";
import { StaticReducer } from "../reducers/staticDataReducer";
import axios from "axios";
import { useEffect } from "react";
import { LoadingPage } from "../components/pages";
import ErrorPage from "../components/pages/ErrorPage";

const context = React.createContext();

// here is a main context responsible of the static data and the productsState/

const MainContext = ({ children }) => {
  const [staticData, dispatchStaticData] = useReducer(StaticReducer, { staticLoading: true });
  const [productsState, dispatchProducts] = useReducer(productsReducer, {
    products: { allProducts: [], filteredProducts: [], showDetail: true, productsLoading: true, productsError: false },
    cart: [],
    filter: { text: "", colors: "all", company: "all", category: "all", price: 500000, shipping: false },
  });

  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await axios.get("https://raw.githubusercontent.com/adnen007/e-commerce-app-data/main/homeData.json");
        const { data: list } = await axios("https://raw.githubusercontent.com/adnen007/e-commerce-app-data/main/products.json");
        dispatchStaticData({ type: "STATIC_DATA", playload: data });

        dispatchProducts({ type: "PRODUCTS", playload: list });
      } catch (error) {
        dispatchProducts({ type: "PRODUCTS_ERROR", playload: error });
      }
    };
    get();
  }, []);

  if (staticData.staticLoading || productsState.productsLoading) {
    return <LoadingPage />;
  }
  if (productsState.productsError) {
    return <ErrorPage />;
  }

  return <context.Provider value={{ staticData, dispatchStaticData, productsState, dispatchProducts }}>{children}</context.Provider>;
};
const useMainContext = () => {
  return useContext(context);
};
export { MainContext, useMainContext };
