import * as CoreActions from './CoreActionCreators';
export const fetchProductsList = () => {
    return async( dispatch , getState ) => {
        dispatch( CoreActions.dispatchApiLoading() );
        const getResponse = await CoreActions.dispatchGet("product");
        if (getResponse.totalRecords > 0){
            dispatch(CoreActions.dispatchApiSuccess());
            dispatch(loadProducts(getResponse.data));
        }
        else{
            dispatch(
              CoreActions.dispatchApiError({
                status: 500,
                message : getResponse.errorMessage
              })
            );
            //dispatch the error modal or anything to stop loading shit!
        }
    }
}

export const loadProducts = ( products ) => {
    return{
        type : 'LOAD_PRODUCTS',
        productsList : products
    }
}