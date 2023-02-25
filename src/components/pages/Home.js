import Landing from "../Landing";
import FeaturedProducts from "../FeaturedProducts";
import Features from "../Feautres";
import Newsletter from "../Newsletter";

const Home = () => {
  return (
    <div className="home">
      <Landing />
      <FeaturedProducts />
      <Features />
      <Newsletter />
    </div>
  );
};

export default Home;
