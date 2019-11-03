import intialState from "../defaultstate";

const CoreReducer = (stateSlice = intialState.product, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS": {
      if (action.productsList && action.productsList.length > 0) {
        return { ...stateSlice, productsList: action.productsList };
      }
    }
    default:
      return { ...stateSlice };
  }
};
export default CoreReducer;
