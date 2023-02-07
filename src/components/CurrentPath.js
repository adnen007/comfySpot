import { useLocation, Link } from "react-router-dom";

const CurrentPath = ({ itemName }) => {
  const location = useLocation();
  const path = location.pathname.split("/");

  return (
    <div className="current-path">
      <Link to="/">Home </Link>
      <Link to={`/${path[1]} `}>{`/ ${path[1]} `}</Link>
      <span>{path[2] === "Item" ? `/ ${itemName}` : ""}</span>
    </div>
  );
};

export default CurrentPath;
