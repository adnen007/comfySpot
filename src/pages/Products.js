import CurrentPath from "../components/CurrentPath";
import Filter from "../components/Filter";
import SimpleList from "../components/SimpleList";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillGridFill } from "react-icons/bs";
import DetailedList from "../components/DetailedList";
import LoadingPage from "./LoadingPage";
import { useMainContext } from "../context/context";
import { useState } from "react";

const Products = () => {
  const {
    stateB: {
      products: { allProducts, filteredProducts, showDetail },
    },
    dispatchB,
  } = useMainContext();

  const [select, setSelect] = useState("");

  if (allProducts.length === 0) {
    return <LoadingPage />;
  }

  const sort = (criteria) => {
    setSelect(criteria);
    dispatchB({ type: "SORT", playload: criteria });
  };

  return (
    <div className="products">
      <CurrentPath />
      <div className="container">
        <div className="content">
          <Filter />
          <div className="list">
            <div className="top">
              <div className="view">
                <BsFillGridFill className={showDetail ? "on" : ""} onClick={() => dispatchB({ type: "DETAIL", playload: true })} />
                <RxHamburgerMenu className={showDetail ? "" : "on"} onClick={() => dispatchB({ type: "DETAIL", playload: false })} />
              </div>
              <p className="item-number">{`${filteredProducts.length} Products Found`}</p>
              <span></span>
              <div className="sort">
                <label>Sort By</label>
                <select value={select} onChange={(event) => sort(event.currentTarget.value)}>
                  <option value="LOWEST">Price (Lowest)</option>
                  <option value="HIGHEST">Price (Highest)</option>
                  <option value="AZ">Name (A-Z)</option>
                  <option value="ZA">Name (Z-A)</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? <h2>No Results</h2> : showDetail ? <SimpleList products={filteredProducts} /> : <DetailedList products={filteredProducts} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
