import Landing from "../components/Landing";
import FeaturedProducts from "../components/FeaturedProducts";
import Features from "../components/Feautres";
import Newsletter from "../components/Newsletter";

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
