import instance from "../../axiosConfig/axiosconfig";
 
export const dispatchPOST = ( endPoint ,method, actionPayload ) => {
    console.log("Got a dispatch for following" , endPoint , actionPayload);
}

export  async function dispatchGET ( endPoint, actionPayload ){
   return instance
      .get(endPoint+".json")
      .then(response => {
        let responseData = {
          data : response.data,
          status : 200
        }
        debugger;
        console.log(response);
        return responseData;
      })
      .catch(err => {
        let responseData = {
          data: err,
          status: 200
        };
        debugger;
        console.log(err);
        return responseData;
        ;
      });
}


export const dispatchApiSuccess = () => {
    return {
      type: "SUCCESS_API"
    };
};

export const dispatchApiError = ( payload ) => {
    return {
      type: "ERROR_API",
      status: payload.status,
      message: payload.message
    };
};

export const dispatchApiLoading = ( ) => {
    return {
      type: "LOADING_API"
    };
};

export const dispatchCloseAlertThunk = () => {
    return dispatch => {
        dispatch(resetApiStatus());
    }
}

export const resetApiStatus = () => {
    return {
      type: "RESET_API"
    };
}
