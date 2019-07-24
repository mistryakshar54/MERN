import * as CoreActions from "./CoreActionCreators";

export const addProductToCartThunk = ( productData ) => {
    return dispatch => {
        CoreActions.dispatchPromise( 'sample end point' , addProductToCart( productData) );
        dispatch( addProductToCart( productData) );
    }
}

export const addProductToCart = ( productData ) => {
    return{
        type: "ADD_TO_CART",
        payload : productData
    }
}