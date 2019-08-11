import React from 'react';
import ProductListComponent from '../../ProductList/ProductList';
import CheckoutComponent from '../../Checkout/Checkout';
import NotFoundComponent from "../../NotFound/404";
import OrderListComponent from '../../Order/OrderList/OrderList';
import OrderDetailsComponent from "../../Order/OrderDetails/OrderDetails";
import Row from "react-bootstrap/Row";

import './Content.scss';
import { Route, Switch } from "react-router-dom";

//TODO : Add nested routing for Orders!!
const AppContent = (props)=>{
    return (
      <div className="app-content container-fluid">
        <Switch>
          <Route path="/" exact component={ProductListComponent} />
          <Route path="/checkout" exact component={CheckoutComponent} />
          <Route path="/orders" exact component={OrderListComponent} />
          <Route path="/orders/:orderId" exact  component={OrderDetailsComponent} />
          <Route component={NotFoundComponent} />
        </Switch>
      </div>
    ); 


}

export default AppContent;