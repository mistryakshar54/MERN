import React , {Fragment} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faMinus,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";

const CartLineItems = ( props ) => {
    let { cartItems, addQty, reduceQty, removeItem } = props;
    let cartTotal=0;
    return (
      <Fragment>
        <Table className="text-centered" responsive>
          {/* <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead> */}
          <tbody>
            {cartItems.map((item, index) => {
              return (
                <tr key={"ci -" + index}>
                  <td className="product-info">
                    <img
                      src={item.image}
                      className="cart-img"
                      alt={item.name}
                    />
                    <h4 className="header-text-content">{item.name}</h4>
                  </td>
                  <td>
                    <FontAwesomeIcon
                      className="cart-icons"
                      onClick={() => reduceQty(item, index)}
                      icon={faMinus}
                    />
                    <span className="mini-cart-qty">{item.qty}</span>
                    <FontAwesomeIcon
                      className="cart-icons"
                      onClick={() => addQty(item)}
                      icon={faPlus}
                    />
                  </td>
                  <td>
                    {(cartTotal = item.price * item.qty)}
                    {item.currency}
                  </td>
                  <td>
                    <FontAwesomeIcon
                      onClick={() => removeItem(item, index)}
                      icon={faTimes}
                    />
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan="4" className="text-right">
                <h4>Total : {cartTotal}</h4>
              </td>
            </tr>
          </tbody>
        </Table>
      </Fragment>
    );
}

export default CartLineItems;