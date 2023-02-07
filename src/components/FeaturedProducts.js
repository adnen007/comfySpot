import { useMainContext } from "../context/context";
import Product from "../components/Product";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const {
    stateA: { featuredProducts },
  } = useMainContext();
  return (
    <div id="featuredProducts" className="featured-products">
      <div className="container">
        <h2>Featured Products</h2>
        <div className="content">
          {featuredProducts.map((e) => {
            return <Product key={e.id} item={e} />;
          })}
        </div>

        <Link to={`/Products`}>ALL PRODUCTS</Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
