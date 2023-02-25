const cartReducer = (oldState, action) => {
  if (action.type === "ADD") {
    const cart = oldState;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i]["item"]["id"] === action.playload.item.id) {
        cart[i]["amount"] = cart[i]["amount"] + action.playload["amount"];
        return [...cart];
      }
    }
    return [...cart, action.playload];
  }
  if (action.type === "CLEAR_CART") {
    return [];
  }
  if (action.type === "DELETE") {
    return oldState.filter((e) => {
      if (e.item.id === action.playload) {
        return false;
      }
      return true;
    });
  }
  if (action.type === "COUNTER") {
    return oldState.map((e) => {
      if (e.item.id === action.playload.id) {
        return { ...e, amount: action.playload.amount };
      }
      return e;
    });
  }
  throw new Error("action didn't match");
};

export { cartReducer };
