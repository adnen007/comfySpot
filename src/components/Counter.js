const Counter = ({ amount, changeAmount, stock, id }) => {
  const onCounterClick = (i) => {
    if (amount + i >= 1) {
      if (amount + i <= +stock) {
        changeAmount({ id, amount: amount + i });
      } else {
        alert("Max Stock");
      }
    }
  };

  return (
    <div className="counter">
      <span onClick={() => onCounterClick(-1)}>-</span>
      {amount}
      <span onClick={() => onCounterClick(1)}>+</span>
    </div>
  );
};

export default Counter;
