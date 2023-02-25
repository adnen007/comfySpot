import CurrentPath from "../CurrentPath";
import { useMainContext } from "../../contexts/mainContext";

const About = () => {
  const {
    staticData: {
      about: { image, title, text },
    },
  } = useMainContext();

  return (
    <div className="about">
      <CurrentPath />
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="info">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
