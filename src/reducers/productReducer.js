const productsReducer = (oldState, action) => {
  if (action.type === "PRODUCTS_LOADING") {
    return { ...oldState, products: { ...oldState.products, productsLoading: false } };
  }
  if (action.type === "PRODUCTS_ERROR") {
    return { ...oldState, products: { ...oldState.products, productsLoading: false, productsError: true } };
  }
  if (action.type === "PRODUCTS") {
    return { ...oldState, products: { ...oldState.products, allProducts: action.playload, filteredProducts: action.playload, productsLoading: false } };
  }

  throw new Error("action didn't match");
};

export { productsReducer };
