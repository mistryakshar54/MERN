import initialState from "./DefaultState";

const CoreReducer = (stateSlice = initialState.apiStatus, action) => {
  switch (action.type) {
    case "SUCCESS_API": {
      let successApi = {
        loadingState: false,
        apiStatus: 200,
        message: ""
      };
      return { ...stateSlice, apiStatus: successApi };
    }
    case "ERROR_API": {
      let errorApi = {
        loadingState: false,
        apiStatus: action.payload.status,
        message: action.payload.message
      };
      return { ...stateSlice, apiStatus: errorApi };
    }
    case "LOADING_API": {
      let loadingApi = {
        loadingState: true,
        apiStatus: 0,
        message: ""
      };
      return { ...stateSlice, apiStatus: loadingApi };
    }
    default:
      return { ...stateSlice };
  }
};
export default CoreReducer;
