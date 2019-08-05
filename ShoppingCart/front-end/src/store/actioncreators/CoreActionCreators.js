
export const dispatchPromise = ( endPoint , actionPayload ) => {
    console.log("Got a dispatch for following" , endPoint , actionPayload);
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
