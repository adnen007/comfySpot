import { Home, About, Products, Error as ErrorPage, Item, Cart } from "./components/pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="shared-page">
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
    </div>
  );
};

export default App;
