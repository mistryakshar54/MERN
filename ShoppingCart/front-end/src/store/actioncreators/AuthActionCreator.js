import {
  authProvider,
  firebaseAuth
} from "../../firebaseConfig/FirebaseConfig";
import * as CoreActions from "./CoreActionCreators";

export const openAuthPopupThunk = () => {
  return dispatch => {
    firebaseAuth()
      .signInWithPopup(authProvider)
      .then(function(result) {
        var token = result.credential.accessToken;
        var expiresAt = new Date().getTime() + 3600 * 1000; //1hour
        let authData = {
          authToken: token,
          isAuthenticated: true,
          expiresAt: expiresAt,
          authUser: result.additionalUserInfo.profile
        };
        
        if( window.localStorage )
        {
            window.localStorage.setItem("authUser", JSON.stringify(authData));
        }
        dispatch(autoLogoutThunk(expiresAt));
        dispatch(setAuthData(authData));
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        //TODO Add dispatch for error
      });
  };
};
export const setAuthData = authData => {
  return {
    type: "AUTH_LOGIN",
    payload: authData
  };
};

export const autoLogoutThunk = tokenExpirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logoutReminderThunk());
    }, tokenExpirationTime);
  };
};

export const logoutReminderThunk = () => {
  return dispatch => {
    //Show reminder that session is about to expire
    dispatch(logoutThunk());
  };
};

export const logoutThunk = () => {
  return dispatch => {
    if ( window.localStorage && window.localStorage.getItem("authUser") !== null){
        window.localStorage.removeItem("authUser");
    }
      dispatch(logoutUser());
  };
};

export const logoutUser = () => {
  return {
    type: "AUTH_LOGOUT"
  };
};

export const checkIsLoggedInThunk = () => {
    return dispatch => {
        if(window.localStorage && ( window.localStorage.getItem("authUser") !== null ))
        {
            let authData = JSON.parse(window.localStorage.getItem("authUser"));
            if(authData.expiresAt > new Date().getTime() + 1000)
            {
               dispatch(autoLogoutThunk(authData.expiresAt));
               dispatch(setAuthData(authData));
            }
        }
    }
}