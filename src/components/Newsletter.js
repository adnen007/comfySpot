import { useMainContext } from "../context/context";

const Newsletter = () => {
  const {
    stateA: {
      newsPaper: { text, title },
    },
  } = useMainContext();
  return (
    <div className="newsletter">
      <div className="container">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <form>
          <input type="email" placeholder="Enter Email" />
          <div className="btn">Subscribe</div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
