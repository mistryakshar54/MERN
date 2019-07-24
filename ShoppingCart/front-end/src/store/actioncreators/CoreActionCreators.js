export const dispatchLoading = () => {};
export const dispatchApiSuccess = () => {};
export const dispatchApiError = () => {};
export const dispatchPromise = ( endPoint , actionPayload ) => {
    console.log("Got a dispatch for following" , endPoint , actionPayload);
}