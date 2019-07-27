import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faMinus
} from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";

const CartLineItems = ( props ) => {
    let { cartItems, addQty, reduceQty, removeItem } = props;
    return (
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
          {cartItems.map((item, index) => {
            return (
              <tr key={"ci -" + index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  {item.price} {item.currency}
                </td>
                <td>
                  <FontAwesomeIcon
                    onClick={() => addQty(item)}
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
                    onClick={() => reduceQty(item, index)}
                    icon={faMinus}
                  />
                </td>
                <td>
                  {item.price * item.qty} {item.currency}
                </td>
                <td>
                  <FontAwesomeIcon
                    onClick={() => removeItem(item, index)}
                    icon={faTrash}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );

}

export default CartLineItems;