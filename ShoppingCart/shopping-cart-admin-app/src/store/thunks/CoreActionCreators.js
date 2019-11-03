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
