import React, { Component } from 'react';
import './Checkout.scss';
import { connect } from "react-redux";
import CheckoutActionsComponent  from "./CheckoutActions/CheckoutActions"; 
import SummaryComponent from "./CheckoutSummary/CheckoutSummary";
import * as CartActions from "../../store/actioncreators/MiniCartActionCreator";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";



class CheckoutComponent extends Component {
    render(){
        if (this.props.cartObject.cartItems.length > 0)
        {
          return (
            <CardDeck>
              <SummaryComponent
                cartItems={this.props.cartObject.cartItems}
                cartSummary={this.props.cartObject.cartSummary}
              />
              <CheckoutActionsComponent cartSummary={this.props.cartObject.cartSummary} />
            </CardDeck>
          );
        }
        else
        {
          return <h1> Please add atleast one item to the cart </h1>
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
        onCheckoutHandler : ()=> { dispatch() }
    }
}

export default connect( mapStateToProps , mapDispatchToProps )(CheckoutComponent);