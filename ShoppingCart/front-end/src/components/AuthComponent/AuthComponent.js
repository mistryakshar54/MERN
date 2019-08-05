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
        debugger;
        return (
          <React.Fragment>
            {this.props.authData.isAuthenticated === true ? (
              <React.Fragment>
                <img className="user-avatar"
                  src={this.props.authData.authUser.picture}
                  alt={this.props.authData.authUser.given_name}
                />
                <NavDropdown
                  title={this.props.authData.authUser.given_name}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

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