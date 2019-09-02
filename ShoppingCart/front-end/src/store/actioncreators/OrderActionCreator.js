import * as CoreActions from "./CoreActionCreators";
export const createOrderThunk = () => {
    return async(dispatch , getState) => {
        dispatch( CoreActions.dispatchApiLoading());
        let orderData = {
          orderitems: Object.assign([], getState().MiniCartReducer.cartItems),
          paymentsummary : Object.assign({}, getState().MiniCartReducer.cartSummary),
          userName : getState().AuthReducer.authUser.name,
          userId : getState().AuthReducer.authUser.id,
          createdDate : new Date(),
          orderNo : 'ORD-'+new Date().getTime().toString().substring(7)
        };
        
        let resp = await CoreActions.dispatchPOST('orders' , orderData);
        if(resp.status === 200)
        {
            dispatch( CoreActions.dispatchApiSuccess() );
            dispatch( setSelectedOrder( orderData ) );
            dispatch(CoreActions.redirectUrlThunk("/orders/" + orderData.orderNo));
        }
        else
        {
            let payload = {
                status: resp.status,
                message: resp.message
            }
            dispatch(CoreActions.dispatchApiError(payload));
        }
       
    }
}

export const fetchOrdersForUserThunk = () => {
    return (dispatch,getState) => {

    }
}

export const fetchOrdersForUser = ( userOrders ) => {
    return {
      type: "LOAD_USER_ORDERS",
      orderList: userOrders
    };
}

//delete order

//get order list
export const fetchAllUserOrdersThunk = () => {
     return async (dispatch, getState) => {
       dispatch(CoreActions.dispatchApiLoading());
         let queryParams = '?orderBy="userId"&equalTo="' + getState().AuthReducer.authUser.id + '"';
         let resp = await CoreActions.dispatchGET(
           "orders.json",
           queryParams
         );
         const orderList = [];
         if (resp.data && Object.keys(resp.data).length > 0) {
           for (var dataId in resp.data) {
             orderList.push(resp.data[dataId]);
           }
           dispatch(fetchOrdersForUser(orderList));
           dispatch(CoreActions.dispatchApiSuccess());
         } else {
           let payload = {
             status: 404,
             message: "No Orders Fetched"
           };
           dispatch(CoreActions.dispatchApiError(payload));
         } 
     }
}
export const setUserOrders = (orderList) => {
    return{
        type : "SET_ALL_ORDERS",
        orderList
    }
}
//get order details
export const fetchOrderDetailsThunk = ( orderId ) => {

    return async (dispatch , getState) => {
        dispatch( CoreActions.dispatchApiLoading());
        if (getState().OrderReducer.currentOrder && getState().OrderReducer.currentOrder.orderNo === orderId){
            dispatch( CoreActions.dispatchApiSuccess());
        }
        else{
            const orderList = getState().OrderReducer.orderList;
            let matchIndex = -1;
            orderList.forEach((orderItem,index) => {
                 if (orderItem.orderNo === orderId) {
                   matchIndex = index;
                 }   
            });
            if(matchIndex > -1)
            {
                dispatch(setSelectedOrder(orderList[matchIndex]));
                dispatch( CoreActions.dispatchApiSuccess());
                dispatch(CoreActions.redirectUrlThunk("/orders/" + orderId));

            }
            else
            {
               let payload = {
                 status: 404,
                 message: 'No such order'
               };
               dispatch(CoreActions.dispatchApiError(payload));
            }
        }
    }
}

export const setSelectedOrder = ( orderData ) => {
    return {
        type : "SET_SELECTED_ORDER",
        orderData
    }
}