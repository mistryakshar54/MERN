import React from 'react';
import ProductListComponent from '../../ProductList/ProductList';
import CheckoutComponent from '../../Checkout/Checkout';
import NotFoundComponent from "../../NotFound/404";
import Row from "react-bootstrap/Row";

import './Content.scss';
import { Route, Switch } from "react-router-dom";


const AppContent = (props)=>{
    return (
      <div className="app-content container-fluid">
        <Switch>
            <Route path="/" exact component={ProductListComponent} />
            <Route path="/checkout"  component={CheckoutComponent} />
            <Route component={NotFoundComponent} />
        </Switch>
      </div>
    ); 


}

export default AppContent;