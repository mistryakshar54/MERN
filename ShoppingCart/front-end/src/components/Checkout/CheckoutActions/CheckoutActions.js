import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
const CheckoutActionsComponent = props => {
  let { cartSummary, finalizeOrder } = props;
  return (
    <Col xs lg="4">
      <Card>
        <Card.Body>
          <h2>Summary</h2>
          <div className="col-12">
            <label className="col-lg-4 text-left"> Amount </label>
            <label className="col-lg-4 text-right">
              {" "}
              {cartSummary.totalAmount} Rs{" "}
            </label>
          </div>
          <div className="col-12">
            <label className="col-lg-4 text-left"> Shipping Charge </label>
            <label className="col-lg-4 text-right"> 0 Rs </label>
          </div>
          <div className="col-12">
            <hr />
            <label className="col-lg-4 text-left"> Final Amount </label>
            <label className="col-lg-4 text-right">
              {" "}
              {cartSummary.totalAmount} Rs{" "}
            </label>
          </div>
          <div className="col-12">
            <hr />
            <Button onClick={finalizeOrder} variant="outline-dark">Finalize Order</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CheckoutActionsComponent;
