import initialState from "./DefaultState";

const AuthReducer = (stateSlice = initialState.auth, action) => {
  switch (action.type) {
    case "AUTH_LOGIN": {
      if( action.payload )
      {
          debugger;
        let authPayload = Object.assign( {} , action.payload );
         return {
           ...authPayload
         };
      }
      return { ...stateSlice };
    }
    case "AUTH_LOGOUT": {
        let clearAuthPayload = Object.assign({} , initialState.auth);
        return {
            ...clearAuthPayload
        };
    }
    case "AUTH_REFRESH_TOKEN": {
      return { ...stateSlice };
    }
    default:
      return { ...stateSlice };
  }
};
export default AuthReducer;
