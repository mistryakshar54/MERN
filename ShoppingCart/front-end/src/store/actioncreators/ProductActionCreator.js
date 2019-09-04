import * as CoreActions from "./CoreActionCreators";
import { dispatchGET } from "./CoreActionCreators";
export const fetchAllProductsThunk = () => {
           return async (dispatch, getState) => {
             dispatch(CoreActions.dispatchApiLoading());
             let resp = await CoreActions.dispatchGET("products.json");
             const productsList = [];
             if (resp.data && Object.keys(resp.data).length > 0) {
               for (var dataId in resp.data) {
                 productsList.push(resp.data[dataId]);
               }
               dispatch(fetchAllProducts(productsList));
               dispatch(CoreActions.dispatchApiSuccess());
             } else {
               let payload = {
                 status: 404,
                 message: "No Products Fetched"
               };
               dispatch(CoreActions.dispatchApiError(payload));
             }
           };
         };

export const fetchAllProducts = productData => {
         return {
           type: "FETCH_ALL_PRODUCTS",
           productsList: productData
         };
       };

export const fetchDataThunk = () => {
  return async dispatch => {
      
      try {
      const resp = await fetch("http://example.com/todos");
      console.log(resp.body);
      const productsList = [];
      if (resp.data && Object.keys(resp.data).length > 0) {
        for (var dataId in resp.data) {
          productsList.push(resp.data[dataId]);
        }
        dispatch(fetchAllProducts(productsList));
        dispatch(CoreActions.dispatchApiSuccess());
      } else {
        let payload = {
          status: 404,
          message: "No Products Fetched"
        };
        dispatch(CoreActions.dispatchApiError(payload));
      }
    }
    catch (e) {
      return dispatch(CoreActions.dispatchApiError());
    }
  }
}