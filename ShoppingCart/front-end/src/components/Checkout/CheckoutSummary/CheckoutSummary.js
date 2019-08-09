import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const SummaryComponent = props => {
  let { cartItems, cartSummary } = props;
  return (
    <Col>
      <Card>
        <Card.Body>
          <h2>Item Details</h2>
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
                    <td>{item.qty}</td>
                    <td>
                      {item.price * item.qty} {item.currency}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan="4" className="text-right">Total</td>
                <td >{cartSummary.totalAmount} Rs </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SummaryComponent;
