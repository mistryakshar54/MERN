import React,{ Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import './MiniCart.scss';
import Modal from 'react-bootstrap/Modal';
import Table from "react-bootstrap/Table";
// import CartLineItems from './CartLineItems/CartLineItems';
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
 
    renderCartTable = () => {
        const cartLineItems = this.props.cartObject.cartItems;
        if (cartLineItems.length > 0) {
            cartLineItems.forEach((item , index) => {
                return(
                    <tr key={ 'ci -' + index }>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                        <td>{item.price} * {item.qty}</td>
                    </tr>
                );
            });
        } else {
          return <tr />;
        }
    }
    render(){
        return (
          <div className={this.state.miniCartClass}>
            {/* onClick={this.toggleMinicart}  */}
            <div
              onClick={() => this.setShow(true)}
              className="checkout"
            >
              <FontAwesomeIcon icon={faShoppingBag} />
              <Badge variant="primary">Primary</Badge>
            </div>
            <Modal
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
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                        {
                            this.props.cartObject.cartItems.map( (item , index)=>{
                               return (
                                 <tr
                                   key={
                                     "ci -" +
                                     index
                                   }
                                 >
                                   <td>
                                     {index + 1 }
                                   </td>
                                   <td>
                                     {item.name}
                                   </td>
                                   <td>
                                     {item.price} {item.currency}
                                   </td>
                                   <td>
                                     {item.qty}
                                   </td>
                                   <td>
                                     {item.price *
                                       item.qty} {item.currency}
                                   </td>
                                 </tr>
                               );
                            })
                        }
                  </tbody>
                </Table>
              </Modal.Body>
            </Modal>

            {/* <div className="checkout__order">
                    <h2>This is the sample text</h2>
                    <h2>This is the sample text2</h2>
                </div> */}
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
      
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(MiniCartComponent);