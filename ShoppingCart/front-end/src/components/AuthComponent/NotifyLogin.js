import React, { Component } from "react";
import { connect } from "react-redux";
import * as AuthActionCreators from "../../store/actioncreators/AuthActionCreator";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./NotifyLogin.scss";
class NotifyLoginComponent extends Component {
  render() {
    return (
      <div className="container-fluid content-padding">
        <h2>You need to login before viewing this page.</h2>
        <button
          className="btn btn-danger"
          onClick={() =>
            this.props.onLoginHandler(
              this.props.location.state.from.pathname || "/"
            )
          }
        >
          Login
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoginHandler: pathToRedirect => {
      dispatch(AuthActionCreators.openAuthPopupThunk(pathToRedirect));
    }
  };
};
const mapStateToProps = state => {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotifyLoginComponent);
