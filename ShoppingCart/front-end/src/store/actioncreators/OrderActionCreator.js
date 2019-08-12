import * as CoreActions from "./CoreActionCreators";
// import * as axiosInstance from '../../axiosConfig/axiosconfig';
import axios from "axios";
export const createOrderThunk = (historyData) => {
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
            console.log("Order NO: " , orderData.orderNo);
            historyData.push("/orders/" + orderData.orderNo);
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
    return{
        type : "LOAD_USER_ORDERS",
        payload : userOrders
    }
}

//delete order

//get order list

//get order details
export const fetchOrderDetailsThunk = ( orderId ) => {

    return async (dispatch , getState) => {
        dispatch( CoreActions.dispatchApiLoading());

        if (getState.OrderReducer.currentOrder && getState.OrderReducer.currentOrder.orderNo === orderId){
            dispatch( CoreActions.dispatchApiSuccess());
        }
        else
        {
            debugger;
            let queryParams = '?orderBy="orderNo"&equalTo="'+orderId+'"'; 
            let resp = await CoreActions.dispatchGET( 'orders.json' , queryParams );
            debugger;
            // if(resp.status === 200)
            //     {
            //         dispatch( CoreActions.dispatchApiSuccess() );
            //         dispatch( createOrder( orderData ) );
            //         dispatch(fetchOrderDetails());
            //     }
            // else
            //     {
            //         let payload = {
            //             status: resp.status,
            //             message: resp.message
            //         }
            //         dispatch(CoreActions.dispatchApiError(payload));
            //     }
        } 
    }
}

export const setSelectedOrder = ( orderData ) => {
    return {
        type : "SET_SELECTED_ORDER",
        orderData
    }
}