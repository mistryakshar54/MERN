import React,{ Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import './MiniCart.scss';
import Modal from 'react-bootstrap/Modal';
import * as CartActions from "../../store/actioncreators/MiniCartActionCreator";
import CartLineItems from "./CartLineItems/CartLineItems";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
class MiniCartComponent extends Component {

    state={
        miniCartClass: 'cart',
        showModal : false
    }
    
    toggleMinicart = () => {
        let cartClass = this.state.miniCartClass;
        if (cartClass === 'cart-active' )
        {
            this.setState({ miniCartClass: 'cart' });
        }
        else
        {
            this.setState({ miniCartClass: 'cart-active' });
        }
    }

    setShow = ( visibilityFlag ) => {
        this.setState({ showModal: visibilityFlag });
    }
    
    redirectToCheckout = () => {
      this.setShow(false);
      this.props.history.push('/checkout');
    }

    render(){
        return (
          <div className={this.state.miniCartClass}>
            <div onClick={() => this.setShow(true)} className="checkout">
              <FontAwesomeIcon icon={faShoppingBag} />
              <Badge variant="danger">
                {this.props.cartObject.cartItems.length}
              </Badge>
            </div>
            <Modal
              size="lg"
              show={this.state.showModal}
              onHide={() => this.setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Shopping Cart
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {this.props.cartObject.cartItems.length > 0 ? (
                  <React.Fragment>
                    <CartLineItems
                      cartItems={this.props.cartObject.cartItems}
                      addQty={this.props.onAddQtyHandler}
                      reduceQty={this.props.onRemoveQtyHandler}
                      removeItem={this.props.onDeleteItemHandler}
                    />
                    <div className="col-12 display-flex">
                      <div className="col-6">
                        <label
                          onClick={() => this.setShow(false)}
                          className="back-to-shopping"
                        >
                          Back to Shopping
                        </label>
                      </div>
                      <div className="col-6">
                        <Button
                          className="btn btn-danger checkout-btn"
                          onClick={this.redirectToCheckout}
                        >
                          Proceed To Checkout
                        </Button>
                      </div>
                    </div>
                  </React.Fragment>
                ) : (
                  <h1>Empty Cart :(</h1>
                )}
              </Modal.Body>
            </Modal>
          </div>
        );
    };
}

const mapStateToProps = ( state ) => {
    return {
      cartObject: state.MiniCartReducer
    };
}
const mapDispatchToProps = ( dispatch ) => {
    return{
      onAddQtyHandler : (item) => { dispatch( CartActions.addProductToCart( item ) ) },
      onRemoveQtyHandler : (item , index) => { dispatch( CartActions.removeQty( item , index ) ) },
      onDeleteItemHandler : (item , index) => { dispatch( CartActions.removeProductFromCart( item , index ) ) }
    }
}

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(MiniCartComponent));