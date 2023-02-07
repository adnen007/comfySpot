import { useMainContext } from "../context/context";
import { useState } from "react";
import { GoCheck } from "react-icons/go";

const Filter = () => {
  const {
    stateB: {
      filter: { price },
    },
    dispatchB,
  } = useMainContext();

  const [text, setText] = useState("");
  const [company, setCompany] = useState("all");
  const [checkedColor, setCheckedColor] = useState("");
  const [checkedCategory, setCheckedCategory] = useState("");

  const colors = ["all", "#ffb900", "#00ff00", "#ff0000", "#0000ff", "#000"];
  const categories = ["all", "office", "living room", "kitchen", "bedroom", "dining", "kids"];
  const companies = ["all", "marcos", "liddy", "ikea", "caressa"];

  const onCompanyChange = (value) => {
    setCompany(value);
    dispatchB({ type: "COMPANY", playload: value });
  };

  const onColorClick = (e, i) => {
    dispatchB({ type: "COLORS", playload: e });
    setCheckedColor(i);
  };

  const onCategoryClick = (e, i) => {
    dispatchB({ type: "CATEGORY", playload: e });
    setCheckedCategory(i);
  };

  const onClearClick = () => {
    dispatchB({ type: "CLEAR" });
    setCheckedColor("");
    setCheckedCategory("");
    setCompany("all");
  };

  return (
    <div className="filter">
      <input
        type="search"
        placeholder="Search"
        value={text}
        onChange={(event) => {
          setText(event.currentTarget.value);
          dispatchB({ type: "FILTER_SEARCH", playload: event.currentTarget.value });
        }}
      />
      <div className="category">
        <h3>Category</h3>
        <ul>
          {categories.map((e, i) => {
            return (
              <li className={checkedCategory === i ? "checked" : ""} key={i} onClick={() => onCategoryClick(e, i)}>
                {e}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="company">
        <h3>Company</h3>
        <select value={company} onChange={(event) => onCompanyChange(event.currentTarget.value)}>
          {companies.map((e) => {
            return (
              <option key={e} value={e}>
                {e}
              </option>
            );
          })}
        </select>
      </div>
      <div className="colors">
        <h3>Colors</h3>
        <ul>
          {colors.map((e, i) => {
            return (
              <li key={i} onClick={() => onColorClick(e, i)} style={{ backgroundColor: i === 0 ? "" : e }}>
                {i === 0 ? "All" : ""}
                {checkedColor === i && i !== 0 ? <GoCheck /> : ""}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="price">
        <h3>Price</h3>
        <p>${(price / 100).toFixed(2)}</p>
        <input type="range" value={price} min="10000" step="10" max="1000000" onChange={(event) => dispatchB({ type: "PRICE", playload: event.currentTarget.value })} />
      </div>
      <div className="free-shipping">
        <div>Free Shipping</div>
        <input type="checkbox" onClick={(event) => dispatchB({ type: "SHIPPING", playload: event.target.checked })} />
      </div>
      <div className="clear" onClick={onClearClick}>
        Clear Filter
      </div>
    </div>
  );
};

export default Filter;
