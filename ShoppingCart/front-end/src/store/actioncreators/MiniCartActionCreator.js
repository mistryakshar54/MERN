import * as CoreActions from "./CoreActionCreators";

export const addProductToCartThunk = ( productData ) => {
    return dispatch => {
      dispatch(CoreActions.dispatchApiLoading());
             
        let itemData = {
          name: productData.name,
          qty: 1,
          productId: productData.productId,
          image: productData.image,
          price: productData.price,
          currency: productData.currency
        }; 
        dispatch(addProductToCart(itemData));
        dispatch( updateCartSummary() );
        dispatch(CoreActions.dispatchApiSuccess());
             
    }
}

export const addProductToCart = ( productData ) => {
    return{
        type: "ADD_TO_CART",
        payload : productData
    }
}

export const addQty = ( productData ) => {
    return addProductToCart( productData );
}

export const removeQty = ( productData , index ) => {
    return {
      type: "REMOVE_FROM_CART",
      payload: productData,
      payloadIndex: index
    };
}

export const removeProductFromCart = (productData, index) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: productData,
    payloadIndex: index,
    deleteFlag: true
  };
};

export const updateCartSummary = () => {
    return {
      type: "UPDATE_CART_SUMMARY"
    };
}