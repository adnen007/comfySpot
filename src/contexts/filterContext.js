import React, { useContext, useReducer, useEffect } from "react";
import { filterReducer } from "../reducers/filterReducer";
import { useMainContext } from "./mainContext";
import { LoadingPage } from "../components/pages";

const context = React.createContext();

const FilterContext = ({ children }) => {
  const {
    productsState: {
      products: { allProducts },
    },
  } = useMainContext();
  const [filteredProducts, dispatchFilter] = useReducer(filterReducer, {
    allProducts: [],
    filteredProducts: [],
    filters: { text: "", colors: "all", company: "all", category: "all", maxPrice: 0, price: 0, shipping: false },
    sort: "",
    productLoading: true,
    showDetail: true,
  });

  useEffect(() => {
    dispatchFilter({ type: "GET_ALL_PRODUCTS", playload: allProducts });
    dispatchFilter({ type: "SET_MAX_PRICE" });
  }, [allProducts]);

  useEffect(() => {
    dispatchFilter({ type: "SORT", playload: filteredProducts.sort });
  }, [dispatchFilter, filteredProducts.sort, filteredProducts.filters]);

  if (filteredProducts.productLoading) {
    return <LoadingPage />;
  }
  return <context.Provider value={{ filteredProducts, dispatchFilter }}>{children}</context.Provider>;
};

const useFilterContext = () => {
  return useContext(context);
};

export { useFilterContext, FilterContext };
