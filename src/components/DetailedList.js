import DetailedProduct from "./DetailedProduct";
const DetailedList = ({ products }) => {
  return (
    <div className="detailed-list">
      {products.map((e) => {
        return <DetailedProduct item={e} key={e.id} />;
      })}
    </div>
  );
};

export default DetailedList;
