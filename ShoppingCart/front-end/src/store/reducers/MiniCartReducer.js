/* eslint-disable no-fallthrough */
import initialState from "./DefaultState";

const MiniCartReducer = (stateSlice = initialState.cart, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      debugger;
      if (action.payload) {
        let cartObj = Object.assign({}, stateSlice);
        let cartArr = Object.assign([], stateSlice.cartItems);
        let matchIndex = -1;
        cartObj.cartItems.forEach((item, index) => {
          if (item.id === action.payload.id) {
            matchIndex = index;
          }
        });
        if (matchIndex > -1)
        {
          let item = cartArr[matchIndex]; 
          item.qty++;
          cartArr[matchIndex] = item; 
          return {
            ...stateSlice,
            [stateSlice.cartItems]: {
              ...stateSlice.cartItems,
              [stateSlice.cartItems[matchIndex]] : item
            }
          };
        }
        else
        {
          cartObj.cartItems.push(action.payload);
        }
          return {
            ...stateSlice,
            cartItems: cartObj.cartItems
          };
      }
    }
    case "UPDATE_CART_SUMMARY" : {
      return {
        ...stateSlice,
        cartSummary: action.payload,
      };
    }
    case "REMOVE_FROM_CART": {
      if(action.payload)
      {
        let cartObj = Object.assign( {} , stateSlice );
        let cartItem = cartObj.cartItems[action.payloadIndex];
        if (cartItem.qty > 1)
        {
          cartItem.qty--;
        }
         cartObj.cartItems.splice(action.payloadIndex, 1);
        return { 
          ...stateSlice,
          cartItems: cartObj.cartItems
        };
      }
    }
    case "UPDATE_QTY" : {
      if( action.payload && action.payloadIndex )
      {
        let cartObj = Object.assign({}, stateSlice);
        cartObj.cartItems[action.payloadIndex] = action.payload;
        return {
          ...stateSlice,
          cartItems: cartObj.cartItems
        };
      }
    }
    default:{
      return { ...stateSlice };
    }
  }
};
export default MiniCartReducer;
