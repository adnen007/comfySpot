const filterReducer = (oldState, action) => {
  if (action.type === "GET_ALL_PRODUCTS") {
    return { ...oldState, allProducts: action.playload, filteredProducts: action.playload, productLoading: false };
  }
  if (action.type === "SET_MAX_PRICE") {
    let prices = oldState.allProducts.map((p) => {
      return p.price;
    });

    let maxPrice = Math.max(...prices);

    return { ...oldState, filters: { ...oldState.filters, maxPrice, price: maxPrice } };
  }
  if (action.type === "DETAIL") {
    return { ...oldState, showDetail: action.playload };
  }
  // filtering

  const {
    filters: { text, category, company, colors, price, shipping },
  } = oldState;
  const filter = (text, category, company, colors, price, shipping) => {
    const filteredProducts = oldState.allProducts.filter((e) => {
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

  if (action.type === "FILTER_SEARCH") {
    const filteredProducts = filter(action.playload, category, company, colors, price, shipping);
    return { ...oldState, filteredProducts, filters: { ...oldState.filters, text: action.playload } };
  }

  if (action.type === "CATEGORY") {
    const filteredProducts = filter(text, action.playload, company, colors, price, shipping);
    return { ...oldState, filteredProducts, filters: { ...oldState.filters, category: action.playload } };
  }

  if (action.type === "COMPANY") {
    const filteredProducts = filter(text, category, action.playload, colors, price, shipping);
    return { ...oldState, filteredProducts, filters: { ...oldState.filters, company: action.playload } };
  }

  if (action.type === "COLORS") {
    const filteredProducts = filter(text, category, company, action.playload, price, shipping);
    return { ...oldState, filteredProducts, filters: { ...oldState.filters, colors: action.playload } };
  }

  if (action.type === "PRICE") {
    const filteredProducts = filter(text, category, company, colors, action.playload, shipping);
    return { ...oldState, filteredProducts, filters: { ...oldState.filters, price: action.playload } };
  }

  if (action.type === "SHIPPING") {
    const filteredProducts = filter(text, category, company, colors, price, action.playload);
    return { ...oldState, filteredProducts, filters: { ...oldState.filters, shipping: action.playload } };
  }
  if (action.type === "CLEAR") {
    return {
      ...oldState,
      filteredProducts: oldState.allProducts,
      filters: { text: "", colors: "all", company: "all", category: "all", price: 500000, shipping: false },
    };
  }

  // sorting
  // here be carefull in js the object saved by their refernce and you put the same array in
  // allProducts and filteredProducts so the same refernce to one array.so when you sort the filteredProducts
  // the allProducts will sort also because they are the same array.

  if (action.type === "SORT") {
    let filteredProducts = oldState.filteredProducts;

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
    }

    return { ...oldState, filteredProducts: filteredProducts, sort: action.playload };
  }

  throw new Error("action didn't match");
};

export { filterReducer };
