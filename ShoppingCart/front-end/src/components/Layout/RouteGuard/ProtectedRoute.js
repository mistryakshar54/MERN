import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import * as AuthActionCreators from "../../../store/actioncreators/AuthActionCreator";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          AuthActionCreators.isAuthenticated() === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
};

const mapStateToProps = (state) => {
    return{
        authStatus : state.AuthReducer
    }
}

export default connect(mapStateToProps)(ProtectedRoute);