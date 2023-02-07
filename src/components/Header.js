import { BsFillCartFill } from "react-icons/bs"; // look how react icon wrok exactly it is safe to use it
import { BiUserPlus } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMainContext } from "../context/context";
const Header = () => {
  const {
    stateB: { cart },
  } = useMainContext();
  const [bars, setbars] = useState(false); // you can add state without caring about the mangement
  // if the state don't have any relation with the data but it just for simple effect like button
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
            <li onClick={() => setbars(!bars)}>
              <Link to="/"> Home</Link>
            </li>
            <li onClick={() => setbars(!bars)}>
              <Link to="/About"> About </Link>
            </li>
            <li onClick={() => setbars(!bars)}>
              <Link to="/Products"> Products</Link>
            </li>
          </ul>
          <div className="c_l">
            <Link onClick={() => setbars(!bars)} to="./Cart" className="cart">
              Cart <BsFillCartFill />
              <span>{cart.length}</span>
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
