import initialState from "./DefaultState";

const ProductsReducer = (stateSlice = initialState.products, action) => {
  switch (action.type) {
    case "FETCH_ALL_PRODUCTS": {
      return { ...stateSlice };
    }

    default:
      return { ...stateSlice };
  }
};
export default ProductsReducer;