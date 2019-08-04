import React, { Component} from 'react';
import {connect} from 'react-redux';
import * as AuthActionCreators from '../../store/actioncreators/AuthActionCreator';
import Nav from "react-bootstrap/Nav";


class AuthComponent extends Component {

    componentDidMount(){
        this.props.onCheckUserLoggedInHandler();
    }
    render(){
        debugger;
        return (
          <React.Fragment>
            {this.props.authData.isAuthenticated === true ? (
              <React.Fragment>
                <label>
                    Logged in as {this.props.authData.authUser.given_name}
                </label>
                <Nav.Link onClick={this.props.onLogoutHandler}>
                    Logout
                </Nav.Link>
              </React.Fragment>
            ) : (
              <Nav.Link onClick={this.props.onLoginHandler}>
                Login
              </Nav.Link>
            )}
          </React.Fragment>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
      authData: state.AuthReducer,
      apiStatus: state.CoreReducer
    };
}

const mapDispatchToProps = ( dispatch ) => {
    return{
        onLoginHandler : () => {dispatch(AuthActionCreators.openAuthPopupThunk())},
        onLogoutHandler : () => { dispatch(AuthActionCreators.logoutThunk()) },
        onCheckIsAuthenticated : () => {},
        onCheckUserLoggedInHandler : () => { dispatch( AuthActionCreators.checkIsLoggedInThunk() ) }        
    }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthComponent);