import { useMainContext } from "../contexts/mainContext";
import { Link } from "react-router-dom";
const Landing = () => {
  const {
    staticData: {
      landing: { images, title, text },
    },
  } = useMainContext();
  return (
    <div className="landing">
      <div className="container">
        <div>
          <div className="content">
            <h2>{title}</h2>
            <p>
              {text.split(" ").map((e, i) => {
                return <span key={i}>{` ${e}`}</span>;
              })}
            </p>

            <Link to="/Products">SHOP NOW</Link>
            <a href="#featuredProducts" className="indicator">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div className="images">
            <img src={images[0]} alt="" />
            <img src={images[1]} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
