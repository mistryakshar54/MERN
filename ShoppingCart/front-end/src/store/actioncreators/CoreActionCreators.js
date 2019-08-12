import instance from "../../axiosConfig/axiosconfig";
 
let statusArr = { 
    401 : "You are not authorized to perform this action" ,
    500 : "Server error occured. Please try again after some time" 
  }
const mapErrorToErrorMessage = (error) => {
  if (error.response) {
    return {
      status: error.response.status,
      message:
        statusArr[error.response.status] === undefined
          ? error.response.data.error
          : statusArr[error.response.status]
    };
  } else {
    return {
      status: 500,
      message: error.message
    };
  }
};

export  async function dispatchPOST ( endPoint, actionPayload ){
   return instance
     .post(endPoint + ".json", actionPayload)
     .then(response => {
       let responseData = {
         data: response.data,
         status : 200
       };
       return responseData;
     })
     .catch(err => {
       return mapErrorToErrorMessage(err);
     });
}

export  async function dispatchGET ( endPoint , queryParams ){
   let url = queryParams === undefined ? endPoint : endPoint + queryParams;  
   return instance
      .get(url)
      .then(response => {
        let responseData = {
          data : response.data
        }
        return responseData;
      })
      .catch(err => {
        let responseData = {
          data: err.data.response
        };
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

export const setUrl = ( historyData ) =>{
  return {
    type: "SET_HISTORY_PROP",
    historyData
  };
}

export const redirectUrlThunk = ( path ) => {
   return (dispatch, getState) => {
     let historyData = getState().CoreReducer.appState;
     historyData.push(path);
   };
}