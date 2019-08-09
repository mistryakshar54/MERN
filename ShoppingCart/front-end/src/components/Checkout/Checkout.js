import React, { Component } from 'react';
import './Checkout.scss';
import { connect } from "react-redux";
import CheckoutActionsComponent  from "./CheckoutActions/CheckoutActions"; 
import SummaryComponent from "./CheckoutSummary/CheckoutSummary";
import * as OrderActions from "../../store/actioncreators/OrderActionCreator";
import CardDeck from "react-bootstrap/CardDeck";



class CheckoutComponent extends Component {
  finalizeOrderHandler = () => {
    //TODO: Redirect user if he is not logged in!!
    this.props.onCheckoutHandler();
  };

  render() {
    if (this.props.cartObject.cartItems.length > 0) {
      return (
        <React.Fragment>
          <h1>Checkout</h1>
          <CardDeck>
            <SummaryComponent
              cartItems={this.props.cartObject.cartItems}
              cartSummary={this.props.cartObject.cartSummary}
            />
            <CheckoutActionsComponent
              cartSummary={this.props.cartObject.cartSummary}
              finalizeOrder={this.finalizeOrderHandler}
            />
          </CardDeck>
        </React.Fragment>
      );
    } else {
      return <h1> Please add atleast one item to the cart </h1>;
    }
  }
}

const mapStateToProps = ( state ) => {
    return {
      cartObject: state.MiniCartReducer
    };
}
const mapDispatchToProps = ( dispatch ) => {
    return{
        onCheckoutHandler : ()=> { dispatch( OrderActions.createOrderThunk() ) }
    }
}

export default connect( mapStateToProps , mapDispatchToProps )(CheckoutComponent);