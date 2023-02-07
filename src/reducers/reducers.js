const reducerA = (oldState, action) => {
  if (action.type === "MAIN_DATA") {
    return action.overload;
  }
  return oldState;
};

const reducerB = (oldState, action) => {
  if (action.type === "PRODUCTS") {
    return { ...oldState, products: { ...oldState.products, allProducts: action.playload, filteredProducts: action.playload } };
  }
  if (action.type === "DETAIL") {
    return { ...oldState, products: { ...oldState.products, showDetail: action.playload } };
  }

  const {
    filter: { text, category, company, colors, price, shipping },
  } = oldState;
  const filter = (text, category, company, colors, price, shipping) => {
    const filteredProducts = oldState.products.allProducts.filter((e) => {
      if (
        e.name.trim().toLowerCase().includes(text.trim().toLowerCase()) &&
        (e.category === category || category === "all") &&
        (e.company === company || company === "all") &&
        (e.colors.includes(colors) || colors === "all") &&
        e.price <= price &&
        (shipping ? e.shipping === true : true)
      ) {
        return true;
      }
      return false;
    });

    return filteredProducts;
  };

  if (action.type === "SORT") {
    let filteredProducts = oldState.products.filteredProducts;

    switch (action.playload) {
      case "LOWEST":
        filteredProducts.sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          } else if (a.price < b.price) {
            return -1;
          }
          return 0;
        });
        break;
      case "HIGHEST":
        filteredProducts.sort((a, b) => {
          if (a.price > b.price) {
            return -1;
          } else if (a.price < b.price) {
            return 1;
          }
          return 0;
        });
        break;
      case "AZ":
        filteredProducts.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          } else if (a.name < b.name) {
            return -1;
          }
          return 0;
        });

        break;
      case "ZA":
        filteredProducts.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          } else if (a.name < b.name) {
            return 1;
          }
          return 0;
        });
        break;
      default:
        console.log("");
    }

    return { ...oldState, products: { ...oldState.products, filteredProducts } };
  }

  if (action.type === "FILTER_SEARCH") {
    const filteredProducts = filter(action.playload, category, company, colors, price, shipping);
    return { ...oldState, products: { ...oldState.products, filteredProducts }, filter: { ...oldState.filter, text: action.playload } };
  }

  if (action.type === "CATEGORY") {
    const filteredProducts = filter(text, action.playload, company, colors, price, shipping);
    return { ...oldState, products: { ...oldState.products, filteredProducts }, filter: { ...oldState.filter, category: action.playload } };
  }

  if (action.type === "COMPANY") {
    const filteredProducts = filter(text, category, action.playload, colors, price, shipping);
    return { ...oldState, products: { ...oldState.products, filteredProducts }, filter: { ...oldState.filter, company: action.playload } };
  }

  if (action.type === "COLORS") {
    const filteredProducts = filter(text, category, company, action.playload, price, shipping);
    return { ...oldState, products: { ...oldState.products, filteredProducts }, filter: { ...oldState.filter, colors: action.playload } };
  }

  if (action.type === "PRICE") {
    const filteredProducts = filter(text, category, company, colors, action.playload, shipping);
    return { ...oldState, products: { ...oldState.products, filteredProducts }, filter: { ...oldState.filter, price: action.playload } };
  }

  if (action.type === "SHIPPING") {
    const filteredProducts = filter(text, category, company, colors, price, action.playload);
    return { ...oldState, products: { ...oldState.products, filteredProducts }, filter: { ...oldState.filter, shipping: action.playload } };
  }
  if (action.type === "CLEAR") {
    return {
      ...oldState,
      products: { ...oldState.products, filteredProducts: oldState.products.allProducts },
      filter: { text: "", colors: "all", company: "all", category: "all", price: 500000, shipping: false },
    };
  }

  if (action.type === "ADD") {
    const cart = oldState.cart;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i]["item"]["id"] === action.playload.item.id) {
        cart[i]["amount"] = cart[i]["amount"] + action.playload["amount"];
        return { ...oldState };
      }
    }
    return { ...oldState, cart: [...oldState.cart, action.playload] };
  }
  if (action.type === "COUNTER") {
    const cart = oldState.cart.map((e) => {
      if (e.item.id === action.playload.id) {
        return { ...e, amount: action.playload.amount };
      }
      return e;
    });
    return { ...oldState, cart };
  }
  if (action.type === "DELETE") {
    const cart = oldState.cart.filter((e) => {
      if (e.item.id === action.playload) {
        return false;
      }
      return true;
    });
    return { ...oldState, cart };
  }
  if (action.type === "CLEAR_CART") {
    return { ...oldState, cart: [] };
  }
  return oldState;
};

export { reducerA, reducerB };
