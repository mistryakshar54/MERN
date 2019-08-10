import React from 'react';
import Alert from "react-bootstrap/Alert";
import {connect} from 'react-redux';
import * as CoreActionCreators from '../../../../store/actioncreators/CoreActionCreators';
import './Alert.scss';

const AlertComponent = ( props ) => {

const closeDismissAlert = () => {
    props.onDismissAlertHandler();
}

if (props.apiStatus.toggleAlert === true) {
  return (
    <Alert
      variant="danger"
      onClose={() => closeDismissAlert()}
      dismissible
    >
      <Alert.Heading>{props.apiStatus.message}</Alert.Heading>
    </Alert>
  );
}
else
{
    return null;
}
}

const mapStateToProps = ( state ) => {
    return {
      apiStatus: state.CoreReducer
    };
}

const mapDispatchToProps = ( dispatch ) => {
    return{
        onDismissAlertHandler : () => { dispatch( CoreActionCreators.dispatchCloseAlertThunk() ) }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(AlertComponent);