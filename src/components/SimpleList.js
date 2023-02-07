import Product from "./Product";
const SimpleList = ({ products }) => {
  return (
    <div className="simple-list">
      {products.map((e) => {
        return <Product item={e} key={e.id} />;
      })}
    </div>
  );
};

export default SimpleList;
