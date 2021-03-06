/* eslint-disable no-fallthrough */
import initialState from "./DefaultState";

const MiniCartReducer = (stateSlice = initialState.cart, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      if (action.payload) {
        let cartArr = Object.assign([], stateSlice.cartItems);
        let matchIndex = -1;
        cartArr.forEach((item, index) => {
          if (item.productId === action.payload.productId) {
            matchIndex = index;
          }
        });
        if (matchIndex > -1)
        {
          let item = cartArr[matchIndex]; 
          item.qty++;
          cartArr[matchIndex] = Object.assign({} , item); 
          return {
            ...stateSlice,
            cartItems : cartArr
          }
        }
        else
        {
          cartArr.push(action.payload);
          return {
            ...stateSlice,
            cartItems: cartArr
          };
        }
      }
    }
    case "UPDATE_CART_SUMMARY" : {
      if(stateSlice.cartItems.length > 0)
      {
        let cartSummary = Object.assign({} ,stateSlice.cartSummary);
        let totalAmount= 0;
        stateSlice.cartItems.forEach( item => {
          totalAmount = totalAmount + item.price * item.qty;
        });
        cartSummary.totalItems = stateSlice.cartItems.length;;
        cartSummary.totalAmount = totalAmount;
        cartSummary.shippingCharge = 0;
        cartSummary.currency = stateSlice.cartItems[0].currency;
        return {
          ...stateSlice,
          cartSummary: cartSummary
        };  
      }
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
        if (cartItem.qty === 1 || action.deleteFlag === true) {
          cartObj.cartItems.splice(action.payloadIndex, 1);
        } else {
          cartItem.qty--;
          cartObj.cartItems[action.payloadIndex] = Object.assign(
            {},
            cartItem
          );
        }
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
    case "EMPTY_CART" : {
      let cartObj = Object.assign({}, stateSlice);
      return {
        ...stateSlice,
        cartItems: [],
        cartSummary: {
          totalItems: 0,
          totalAmount: 0,
          shippingCharge: 0,
          currency: "INR"
        }
      };
    }
    default:{
      return { ...stateSlice };
    }
  }
};
export default MiniCartReducer;
