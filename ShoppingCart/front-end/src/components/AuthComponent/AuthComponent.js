import React, { Component} from 'react';
import {connect} from 'react-redux';
import * as AuthActionCreators from '../../store/actioncreators/AuthActionCreator';
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import './AuthComponent.scss';

class AuthComponent extends Component {

    componentDidMount(){
        this.props.onCheckUserLoggedInHandler();
    }
    render(){
        return (
          <React.Fragment>
            {this.props.authData.isAuthenticated === true ? (
              <React.Fragment>
                <img
                  className="user-avatar"
                  src={this.props.authData.authUser.picture}
                  alt={this.props.authData.authUser.given_name}
                />
                <NavDropdown
                  title={this.props.authData.authUser.given_name}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#">
                    Orders
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" onClick={this.props.onLogoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
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