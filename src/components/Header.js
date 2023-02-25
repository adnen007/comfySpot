import { BsFillCartFill } from "react-icons/bs"; // look how react icon wrok exactly it is safe to use it
import { BiUserPlus } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/cart";
import { links } from "../util/constant";
const Header = () => {
  const { cartState } = useCartContext();
  const [bars, setbars] = useState(false);
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span>Comfy</span>Spot
          </Link>
        </div>
        <div className="bars" onClick={() => setbars(!bars)}>
          {bars ? <ImCross /> : <FaBars />}
        </div>
        <div className={`menu ${bars ? "active " : ""}`}>
          <ul>
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id} onClick={() => setbars(!bars)}>
                  <Link to={url}> {text}</Link>
                </li>
              );
            })}
          </ul>
          <div className="c_l">
            <Link onClick={() => setbars(!bars)} to="./Cart" className="cart">
              Cart <BsFillCartFill />
              <span>{cartState.length}</span>
            </Link>
            <Link to="*" className="login">
              Login
              <BiUserPlus />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
