import React , {Component} from 'react';
import AlertComponent from "./Alert/Alert";
import ErrorModalComponent from "./ErrorModal/ErrorModal";


class NotificationComponent extends Component{
    render(){
        return(
            <React.Fragment>
                <AlertComponent/>
                <ErrorModalComponent/>
            </React.Fragment>
        );
    }
}

export default NotificationComponent;