import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CheckoutActionsComponent = props => {
  let { cartSummary } = props;
  return (
    <Card>
      <Card.Body>
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
          <Button variant="outline-dark">Finalize Order</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CheckoutActionsComponent;
