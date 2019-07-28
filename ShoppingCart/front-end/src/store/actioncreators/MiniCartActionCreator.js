import * as CoreActions from "./CoreActionCreators";

export const addProductToCartThunk = ( productData ) => {
    return dispatch => {
        productData.qty = 1;
        // CoreActions.dispatchPromise( 'sample end point' , addProductToCart( productData) );
        dispatch( addProductToCart( productData) );
        dispatch( updateCartSummary() );
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