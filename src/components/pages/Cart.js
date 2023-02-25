import CurrentPath from "../CurrentPath";
import Counter from "../Counter";
import { MdDelete } from "react-icons/md";
import { useCartContext } from "../../contexts/cart";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cartState, dispatchCart } = useCartContext();

  const changeAmount = ({ id, amount }) => {
    dispatchCart({ type: "COUNTER", playload: { id, amount } });
  };

  const deleteItem = (id) => {
    dispatchCart({ type: "DELETE", playload: id });
  };

  const subTotal = () => {
    return cartState.reduce((total, currentValue) => {
      return (total += currentValue.item.price * currentValue.amount);
    }, 0);
  };
  return (
    <div className="cart">
      <CurrentPath />
      <div className="container">
        <div className="list">
          <div className="top">
            <div className="image-space"></div>
            <ul>
              <li>Item</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Subtotal</li>
            </ul>
            <div className="icon-space"></div>
          </div>

          <div className="bottom">
            {cartState.length ? "" : <h2>your cart is empty</h2>}
            {cartState.map(({ item: { id, images, name, price, stock, color }, amount }) => {
              return (
                <div key={id} className="cart-item">
                  <div className="image">
                    <img src={images[0]} alt="" />
                  </div>
                  <div className="content">
                    <div className="info">
                      <div className="name">{name}</div>
                      <div className="color">
                        <p>Color :</p> <span style={{ backgroundColor: color }}></span>
                      </div>
                      <div className="mini-price">${(price / 100).toFixed(2)}</div>
                    </div>
                    <div className="price">${(price / 100).toFixed(2)}</div>
                    <Counter stock={stock} amount={amount} changeAmount={changeAmount} id={id} />
                    <div className="subtotal">${((price / 100) * amount).toFixed(2)}</div>
                  </div>
                  <div className="icon" onClick={() => deleteItem(id)}>
                    <MdDelete />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="shopping-clear">
            <Link to="/Products">Continue Shopping</Link>
            <div onClick={() => dispatchCart({ type: "CLEAR_CART" })} className="clear">
              Clear Shopping Cart
            </div>
          </div>
        </div>
        <div className="paying">
          <div className="detail">
            <div className="row">
              <b>Subtotal :</b> <span>${(subTotal() / 100).toFixed(2)}</span>
            </div>
            <div className="row">
              <p>Shipping fee :</p> <span>${45}</span>
            </div>
            <div className="row">
              <p>Order Total :</p> <span>${(subTotal() / 100).toFixed(2) + 45}</span>
            </div>
          </div>
          <div className="login">
            <Link to="*">LOGIN</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
