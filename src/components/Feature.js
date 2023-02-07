const Feature = ({ children, name, description }) => {
  return (
    <div className="feature">
      <div className="icon">{children}</div>
      <div className="title">{name}</div>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
