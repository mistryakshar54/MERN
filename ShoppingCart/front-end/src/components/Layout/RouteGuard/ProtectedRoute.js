import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
const ProtectedRoute = ({ component: Component, ...rest }) => {
    debugger;
  return (
      <Route
      {...rest}
      render={props =>
        rest.authStatus &&
        rest.authStatus.isAuthenticated &&
        rest.authStatus.isAuthenticated === true ? (
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