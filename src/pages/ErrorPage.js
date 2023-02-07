import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Sorry, the page you tried cannot be found</p>
      <Link to="/">Back Home</Link>
    </div>
  );
};
export default ErrorPage;
