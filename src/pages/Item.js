import CurrentPath from "../components/CurrentPath";
import { useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";
import { useMainContext } from "../context/context";
import LoadingPage from "../pages/LoadingPage";
import Counter from "../components/Counter";
import { GoCheck } from "react-icons/go";
const Item = () => {
  const {
    stateB: {
      products: { allProducts },
    },
    dispatchB,
  } = useMainContext();

  const { id } = useParams();
  const [n, setN] = useState(0);
  const [checkedColor, setCheckedColor] = useState("");
  const [amount, setAmount] = useState(1);

  const changeAmount = ({ amount }) => {
    setAmount(() => amount);
  };
  if (allProducts.length === 0) {
    return <LoadingPage />;
  }

  const item = allProducts.find((e) => {
    return e.id === id;
  });

  const onColorClick = (e, i) => {
    item.color = e;

    setCheckedColor(i);
  };

  const { stock, price, colors, images, reviews, stars, name, description, company } = item;
  return (
    <div className="item">
      <CurrentPath itemName={name} />
      <div className="container">
        <Link to="/Products">BACK TO PRODUCTS</Link>
        <div className="content">
          <div className="images">
            <div className="main-image">
              <img src={images[n]} alt="" />
            </div>
            <div className="list-images">
              {images.map((e, i) => {
                return (
                  <div className="image" key={i} onClick={() => setN(i)}>
                    <img src={e} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="info">
            <h2>{name} </h2>
            <div className="rev">
              <div className="stars">
                <div key={1}>{Math.round(stars) >= 1 ? <BsStarFill /> : <BsStar />}</div>
                <div key={2}>{Math.round(stars) >= 2 ? <BsStarFill /> : <BsStar />}</div>
                <div key={3}>{Math.round(stars) >= 3 ? <BsStarFill /> : <BsStar />}</div>
                <div key={4}>{Math.round(stars) >= 4 ? <BsStarFill /> : <BsStar />}</div>
                <div key={5}>{Math.round(stars) >= 5 ? <BsStarFill /> : <BsStar />}</div>
              </div>
              <p>{`(${reviews} customer reviews)`} </p>
            </div>
            <div className="price">${price / 100}</div>
            <div className="description">{description}</div>
            <div className="references">
              <div>
                <b>Available :</b> <span>{stock > 0 ? "In Stock" : "Out Of Stack"}</span>
              </div>
              <div>
                <b>SKU :</b> <span>{id}</span>
              </div>
              <div>
                <b>Brand :</b> <span>{company}</span>
              </div>
            </div>
            <span></span>
            <div className="colors">
              <p>colors</p>
              <div>
                {colors.map((e, i) => {
                  return (
                    <span onClick={() => onColorClick(e, i)} key={i} style={{ backgroundColor: e }}>
                      {checkedColor === i ? <GoCheck /> : ""}
                    </span>
                  );
                })}
              </div>
            </div>
            <Counter amount={amount} id={id} changeAmount={changeAmount} stock={item.stock} />
            <Link onClick={() => dispatchB({ type: "ADD", playload: { item, amount } })} to="/Cart">
              ADD TO CART
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
