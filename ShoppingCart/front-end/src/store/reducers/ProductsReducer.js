import initialState from "./DefaultState";

const ProductsReducer = (stateSlice = initialState.products, action) => {
  switch (action.type) {
    case "FETCH_ALL_PRODUCTS": {
      debugger;
      if (action.productsList) {
        return {
          ...stateSlice,
          productsList: action.productsList
        };
      }
      return {
        ...stateSlice
      };
    }
    default:
      return { ...stateSlice };
  }
};
export default ProductsReducer;