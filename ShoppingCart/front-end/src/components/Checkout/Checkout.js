import React, { Component } from 'react';
import './Checkout.scss';
import { connect } from "react-redux";
import CheckoutActionsComponent  from "./CheckoutActions/CheckoutActions"; 
import SummaryComponent from "./CheckoutSummary/CheckoutSummary";
import * as CartActions from "../../store/actioncreators/MiniCartActionCreator";

class CheckoutComponent extends Component {
    render(){
        return (
          <div>
            <SummaryComponent
              cartItems={this.props.cartObject.cartItems}
              cartSummary={this.props.cartObject.cartSummary}
            />
            <CheckoutActionsComponent
              cartSummary={this.props.cartObject.cartSummary}
            />
          </div>
        );
        
    }
}

const mapStateToProps = ( state ) => {
    return {
      cartObject: state.MiniCartReducer
    };
}
const mapDispatchToProps = ( dispatch ) => {
    return{
        onCheckoutHandler : ()=> { dispatch() }
    }
}

export default connect( mapStateToProps , mapDispatchToProps )(CheckoutComponent);