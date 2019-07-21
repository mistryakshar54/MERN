import * as CoreActions from "./CoreActionCreators";

export const fetchAllProductsThunk = () => {
   return dispatch => {
       dispatch( fetchAllProducts() );
   }
}
export const fetchAllProducts = () => {
    return {
      type: "FETCH_ALL_PRODUCTS"
    };
}