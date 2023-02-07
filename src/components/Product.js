import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ item: { images, price, name, id } }) => {
  return (
    <div className="product">
      <div className="images">
        <div className="cover">
          <Link to={`/Products/Item/${id}`}>
            <div className="icon">
              <FaSearch />
            </div>
          </Link>
        </div>
        <img src={images[0]} alt="" />
      </div>
      <div className="info">
        <p>{name}</p> <div className="price">{`$${price / 100}`}</div>
      </div>
    </div>
  );
};

export default Product;
