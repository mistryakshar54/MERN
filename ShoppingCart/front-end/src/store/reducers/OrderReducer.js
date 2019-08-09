/* eslint-disable no-fallthrough */
import initialState from "./DefaultState";

const OrderReducer = (stateSlice = initialState.order, action) => {
  switch (action.type) {
    case "ADD_NEW_ORDER": {
      if (action.orderData) {
        return {
          ...stateSlice,
          currentOrder : action.orderData
        };
      }
      return {
        ...stateSlice
      }
    }
    default:{
      return { ...stateSlice };
    }
  }
};
export default OrderReducer;
