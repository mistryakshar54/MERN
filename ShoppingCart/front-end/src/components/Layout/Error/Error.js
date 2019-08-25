import React from 'react';
import { Link } from "react-router-dom";

const ErrorComponent = ( props ) =>{
    return (
      <div className="container-fluid content-padding">
        <h1>
            Oh Snap! Unable to load data!
        </h1>
        <Link className="btn btn-danger" to="/">
          Back to Home
        </Link>
      </div>
    );

}

export default ErrorComponent;