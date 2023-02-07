import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import Item from "./Item";
import Cart from "./Cart";
import { useReducer } from "react";
import { reducerA, reducerB } from "../reducers/reducers";
import { MainContext } from "../context/context";
import axios from "axios";
import { useEffect } from "react";
import LoadingPage from "../pages/LoadingPage";
import ErrorPage from "./ErrorPage";

const SharedPage = () => {
  const [stateA, dispatchA] = useReducer(reducerA, {});
  const [stateB, dispatchB] = useReducer(reducerB, {
    products: { allProducts: [], filteredProducts: [], showDetail: true },
    cart: [],
    filter: { text: "", colors: "all", company: "all", category: "all", price: 500000, shipping: false },
  });

  useEffect(() => {
    const get = async () => {
      const { data } = await axios.get("https://raw.githubusercontent.com/adnen007/e-commerce-app-data/main/homeData.json");
      const { data: list } = await axios("https://raw.githubusercontent.com/adnen007/e-commerce-app-data/main/products.json");
      dispatchA({ type: "MAIN_DATA", overload: data });
      dispatchB({ type: "PRODUCTS", playload: list });
    };

    get();
  }, []);

  if (!stateA.landing) {
    return <LoadingPage />;
  }
  return (
    <div className="shared-page">
      <MainContext value={{ stateA, dispatchA, stateB, dispatchB }}>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Products">
              <Route index element={<Products />} />
              <Route path="Item/:id" element={<Item />} />
            </Route>
            <Route path="Cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </MainContext>
    </div>
  );
};

export default SharedPage;
