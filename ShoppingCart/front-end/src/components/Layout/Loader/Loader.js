import React, { Component } from 'react';
import {connect} from 'react-redux';
import ErrorComponent from '../Error/Error';
import Spinner from "react-bootstrap/Spinner";

import './Loader.scss';
export class Loader extends Component{
    render(){
        let { dataLoaded } = this.props;
        console.log( this.props, this.props.apiData );
        if( this.props.apiData.loadingState === true ){
            return (
              <div className="Spinner">
                <Spinner animation="border" size="lg" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            );
        }
        else{
            if (this.props.apiData.apiStatus === 200 && dataLoaded === true) {
              return this.props.children;
            } else {
              return <ErrorComponent />;
            }
        }
    }
}
const mapStateToProps = state => {
  return {
    apiData: state.CoreReducer
  };
};
export default connect(
  mapStateToProps
)(Loader); 
