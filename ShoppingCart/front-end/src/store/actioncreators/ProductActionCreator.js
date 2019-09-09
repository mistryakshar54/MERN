import * as CoreActions from "./CoreActionCreators";

export const fetchAllProductsThunk = () => {
  return async (dispatch, getState) => {
    dispatch(CoreActions.dispatchApiLoading());
    return await CoreActions.dispatchGET("products.json")
    .then( resp => {
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
    } )
    .catch( err => {
      let payload = {
        status: 404,
        message: "No Products Fetched"
      };
      dispatch(CoreActions.dispatchApiError(payload));
    });
  };
};

export const fetchAllProducts = productData => {
  return {
    type: "FETCH_ALL_PRODUCTS",
    productsList: productData
  };
};