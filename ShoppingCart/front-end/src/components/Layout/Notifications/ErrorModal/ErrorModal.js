import React from "react";
import Modal from "react-bootstrap/Modal";
import {connect} from 'react-redux'
const ErrorModalComponent = props => {
    return (
      <Modal
        size="sm"
        show={props.coreData.isErrorModalOpen}
        // onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    );
    
};


const mapStateToProps = ( state ) => {
    return {
      coreData: state.CoreReducer
    };
}

const mapDispatchToProps = ( dispatch ) => {
    return{
        // onLoginHandler : () => {dispatch(AuthActionCreators.openAuthPopupThunk())},
        // onLogoutHandler : () => { dispatch(AuthActionCreators.logoutThunk()) },
        // onCheckIsAuthenticated : () => {},
        // onCheckUserLoggedInHandler : () => { dispatch( AuthActionCreators.checkIsLoggedInThunk() ) }        
    }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorModalComponent);