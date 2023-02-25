import CurrentPath from "../CurrentPath";
import Filter from "../Filter";
import SimpleList from "../SimpleList";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillGridFill } from "react-icons/bs";
import DetailedList from "../DetailedList";
import { useFilterContext } from "../../contexts/filterContext";
import { useState } from "react";

const Products = () => {
  const {
    filteredProducts: { filteredProducts, showDetail },
    dispatchFilter,
  } = useFilterContext();

  const [select, setSelect] = useState("");

  const sort = (criteria) => {
    setSelect(criteria);
    dispatchFilter({ type: "SORT", playload: criteria });
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
                <BsFillGridFill className={showDetail ? "on" : ""} onClick={() => dispatchFilter({ type: "DETAIL", playload: true })} />
                <RxHamburgerMenu className={showDetail ? "" : "on"} onClick={() => dispatchFilter({ type: "DETAIL", playload: false })} />
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
