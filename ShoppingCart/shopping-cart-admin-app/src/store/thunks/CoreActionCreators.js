import instance from '../../AxiosConfig/Config';

 export const dispatchGet = async (endPoint, queryParams) => {
    let url = queryParams === undefined ? endPoint : endPoint + queryParams;
    const responseData = await instance.get(url); 
    return responseData.data;
};

export const openAppDrawer = () => {
    return {
      type: "OPEN_APP_DRAWER"
    };
}

export const closeAppDrawer = () => {
    return {
      type: "CLOSE_APP_DRAWER"
    };
}

export const dispatchApiSuccess = () => {
  return {
    type: "SUCCESS_API"
  };
};

export const dispatchApiError = payload => {
  return {
    type: "ERROR_API",
    status: payload.status,
    message: payload.message
  };
};

export const dispatchApiLoading = () => {
  return {
    type: "LOADING_API"
  };
};