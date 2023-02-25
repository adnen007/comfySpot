import CurrentPath from "../CurrentPath";
import { useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";
import { useMainContext } from "../../contexts/mainContext";
import { useCartContext } from "../../contexts/cart";
import LoadingPage from "./LoadingPage";
import Counter from "../Counter";
import { GoCheck } from "react-icons/go";
const Item = () => {
  const {
    productsState: {
      products: { allProducts },
    },
  } = useMainContext();

  const { dispatchCart } = useCartContext();

  const { id } = useParams();
  const [n, setN] = useState(0);
  const [checkedColor, setCheckedColor] = useState(0);
  const [amount, setAmount] = useState(1);

  const changeAmount = ({ amount }) => {
    setAmount(amount);
    /*here you don't have to use the updater funtion even when as you know this update related
     on the prevoius value state and as we know the setstate is asynchronous but because
     you updating this state with onclick event handler  react make sure to update the state before
    evnoke the next onclick event handler  for more details check this link https://tinyurl.com/bdhhx3bs */
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
  if (item.color === undefined) {
    item.color = colors[0];
  }
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
                  <div className={`image ${i === n ? "active" : ""}`} key={i} onClick={() => setN(i)}>
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
                <div key={1}>{stars >= 1 ? <BsStarFill /> : stars >= 0.5 ? <BsStarHalf /> : <BsStar />}</div>
                <div key={2}>{stars >= 2 ? <BsStarFill /> : stars >= 1.5 ? <BsStarHalf /> : <BsStar />}</div>
                <div key={3}>{stars >= 3 ? <BsStarFill /> : stars >= 2.5 ? <BsStarHalf /> : <BsStar />}</div>
                <div key={4}>{stars >= 4 ? <BsStarFill /> : stars >= 3.5 ? <BsStarHalf /> : <BsStar />}</div>
                <div key={5}>{stars === 5 ? <BsStarFill /> : stars >= 4.5 ? <BsStarHalf /> : <BsStar />}</div>
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
            <Link onClick={() => dispatchCart({ type: "ADD", playload: { item, amount } })} to="/Cart">
              ADD TO CART
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
