import Feature from "./Feature";
import { useMainContext } from "../contexts/mainContext";
import { SiAzuredataexplorer } from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";
import { MdHistoryEdu } from "react-icons/md";

const icons = { SiAzuredataexplorer: <SiAzuredataexplorer />, AiOutlineAntDesign: <AiOutlineAntDesign />, MdHistoryEdu: <MdHistoryEdu /> };

const Features = () => {
  const {
    staticData: { features },
  } = useMainContext();
  return (
    <div className="features">
      <div className="container">
        <div className="intro">
          <h2>Custom Furniture Built Only For You</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam saepe id reiciendis sunt, repudiandae libero amet rem quia quod?</p>
        </div>
        <div className="content">
          {features.map((e, i) => {
            return (
              <Feature key={i} name={e.name} description={e.description}>
                {icons[e.icon]}
              </Feature>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
