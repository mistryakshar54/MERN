/* eslint-disable no-fallthrough */
import initialState from "./DefaultState";

const OrderReducer = (stateSlice = initialState.order, action) => {
  switch (action.type) {
    case "SET_SELECTED_ORDER": {
      if (action.orderData) {
        return {
          ...stateSlice,
          currentOrder: action.orderData
        };
      }
      return {
        ...stateSlice
      };
    }
    case "LOAD_USER_ORDERS": {
      if (action.orderList) {
        return {
          ...stateSlice,
          orderList: action.orderList
        };
      }
      return {
        ...stateSlice
      };
    }
    default: {
      return { ...stateSlice };
    }
  }
};
export default OrderReducer;
