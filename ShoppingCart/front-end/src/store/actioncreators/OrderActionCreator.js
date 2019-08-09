import * as CoreActions from "./CoreActionCreators";
// import * as axiosInstance from '../../axiosConfig/axiosconfig';
import axios from "axios";

export const createOrderThunk = () => {
    return async(dispatch , getState) => {
        debugger;
        console.log("State Data ==> " , getState());
        let orderData = {
          orderitems: Object.assign([], getState().MiniCartReducer.cartItems),
          paymentsummary : Object.assign({}, getState().MiniCartReducer.cartSummary),
          userName : getState().AuthReducer.authUser.name,
          userId : getState().AuthReducer.authUser.id,
          createdDate : new Date(),
        };

        try{

            let resp = await CoreActions.dispatchGET('orders');
            debugger;
            console.log(resp);
        }
        catch(error){
            debugger;
            console.log("Error" , error);
        }
        // axios
        //   .post(
        //     "https://react-shoppingcart-51ab9.firebaseio.com/orders.json",
        //     orderData
        //   )
        //   .then(response => {
        //     orderData.id = response.data.name;
        //     dispatch(createOrder(orderData));
        //   })
        //   .catch(err => {
        //     debugger;
        //   });
    }
}

export const createOrder = orderData => {
  return {
    type: "ADD_NEW_ORDER",
    orderData
  };
};

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

