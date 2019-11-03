import * as CoreActions from './CoreActionCreators';
export const fetchProductsList = () => {
    return async( dispatch , getState ) => {
        debugger;
        const getResponse = await CoreActions.dispatchGet("product");
        if (getResponse.totalRecords > 0){
            dispatch(loadProducts(getResponse.data));
        }
        else{
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