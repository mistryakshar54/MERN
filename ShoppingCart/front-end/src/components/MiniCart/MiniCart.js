import React,{ Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag , faTrash , faPlus , faMinus } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import './MiniCart.scss';
import Modal from 'react-bootstrap/Modal';
import Table from "react-bootstrap/Table";
import * as CartActions from "../../store/actioncreators/MiniCartActionCreator";

import {connect} from 'react-redux';
class MiniCartComponent extends Component {

    state={
        miniCartClass: 'cart',
        showModal : false
    }
    
    toggleMinicart = () => {
        debugger;
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
 
    render(){
        return (
          <div className={this.state.miniCartClass}>
            <div
              onClick={() => this.setShow(true)}
              className="checkout"
            >
              <FontAwesomeIcon icon={faShoppingBag} />
              <Badge variant="primary">
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
                  Cart
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Table className="text-centered" responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.cartObject.cartItems.map(
                      (item, index) => {
                        return (
                          <tr key={"ci -" + index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>
                              {item.price}{" "}
                              {item.currency}
                            </td>
                            <td>
                              <FontAwesomeIcon
                                onClick={() =>
                                  this.props.onAddQtyHandler(
                                    item
                                  )
                                }
                                icon={faPlus}
                              />
                              <span
                                style={{
                                  padding: "0% 10%"
                                }}
                              >
                                {item.qty}
                              </span>
                              <FontAwesomeIcon
                                onClick={() =>
                                  this.props.onRemoveQtyHandler(
                                    item,
                                    index
                                  )
                                }
                                icon={faMinus}
                              />
                            </td>
                            <td>
                              {item.price * item.qty}{" "}
                              {item.currency}
                            </td>
                            <td>
                              <FontAwesomeIcon
                                onClick={() =>
                                  this.props.onDeleteItemHandler(
                                    item,
                                    index
                                  )
                                }
                                icon={faTrash}
                              />
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </Table>
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

export default connect(mapStateToProps , mapDispatchToProps)(MiniCartComponent);