import initialState from "./DefaultState";

const MiniCartReducer = (stateSlice = initialState.Cart, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      if (action.payload) {
        let cartObj = Object.assign({}, stateSlice);
        return {
          ...stateSlice,
          cartItems: cartObj.cartItems.concat(action.payload)
        };
      }
    }
    case "REMOVE_FROM_CART": {
        return { ...stateSlice };
    }
    default:
      return { ...stateSlice };
  }
};
export default MiniCartReducer;
