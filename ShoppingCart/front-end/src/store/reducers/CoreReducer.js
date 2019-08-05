import initialState from "./DefaultState";

const CoreReducer = (stateSlice = initialState.apiStatus, action) => {
  switch (action.type) {
    case "SUCCESS_API": {
      let successApi = Object.assign({}, stateSlice);
      successApi.loadingState = false;
      successApi.apiStatus = 200;
      successApi.message = "";
      return { ...successApi };
    }
    case "ERROR_API": {
      let errorApi = Object.assign({}, stateSlice);
      errorApi.loadingState = false;
      errorApi.apiStatus = action.payload.status;
      errorApi.message = action.payload.message;
      errorApi.toggleAlert = true;
      return { ...errorApi };
    }
    case "LOADING_API": {
      let loadingApi = Object.assign({}, stateSlice);
      loadingApi.loadingState = true;
      loadingApi.apiStatus = 200;
      loadingApi.message = "";
      loadingApi.toggleAlert = false;
      return { ...loadingApi };
    }
    case "RESET_API": {
      let resetApi = Object.assign({}, stateSlice);
      resetApi.loadingState = false;
      resetApi.apiStatus = 200;
      resetApi.message = "";
      resetApi.toggleAlert = false;
      return { ...resetApi };
    }
    default:
      return { ...stateSlice };
  }
};
export default CoreReducer;
