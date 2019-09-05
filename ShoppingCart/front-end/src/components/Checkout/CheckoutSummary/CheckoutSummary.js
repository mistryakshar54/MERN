import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
const SummaryComponent = props => {
  let { cartItems, cartSummary } = props;
  return (
    <Col>
      <Card>
        <Card.Body className="padded-card order-details">
            <h2 className="app-header-red">Checkout Items</h2>
            {cartItems ? (
              <Table className="text-centered" responsive>
                <thead>
                  <tr>
                    <th className="text-left">Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => {
                    return (
                      <tr key={"ci -" + index}>
                        <td className="display-flex">
                          <img
                            src={"../" + item.image}
                            className="prod-img"
                            alt={item.name}
                          />
                          <label
                            className="product-label"
                            style={{ marginLeft: "10px" }}
                          >
                            {item.name}
                          </label>
                        </td>
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
                </tbody>
              </Table>
            ) : null}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SummaryComponent;
