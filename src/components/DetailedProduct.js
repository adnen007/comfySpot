import { Link } from "react-router-dom";
const DetailedProduct = ({ item: { name, price, images, description, id } }) => {
  return (
    <div className="detailed-product">
      <div className="image">
        <img src={images[0]} alt="" />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <div className="price">{`$${price / 100}`}</div>
        <div className="description">{description} </div>

        <Link className="details" to={`Item/${id}`}>
          DETAILS
        </Link>
      </div>
    </div>
  );
};
export default DetailedProduct;
