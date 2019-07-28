import React from 'react';
import Table from "react-bootstrap/Table";
const SummaryComponent = ( props ) => {

     let { cartItems, cartSummary } = props;
    return (
      <Table className="text-centered" responsive>
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
                    {item.qty}
                </td>
                <td>
                  {item.price * item.qty} {item.currency}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
}

export default SummaryComponent;