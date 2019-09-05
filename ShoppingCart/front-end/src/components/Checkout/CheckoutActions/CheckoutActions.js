import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const CheckoutActionsComponent = props => {
  let { cartSummary, finalizeOrder } = props;
  return (
    <Col xs lg="4">
      <Card style={{ marginTop: "20px" }}>
        <Card.Body style={{ padding: "3%" }}>
          {cartSummary ? (
            <div>
              <h2 className="col-12 app-header-red">Payment Summary</h2>
              <div className="col-12">
                <br />
                <h5>
                  <label className="col-lg-6 text-left">Amount</label>
                  <b>
                    <label className="col-lg-6 text-right">
                      {cartSummary.totalAmount} Rs{" "}
                    </label>
                  </b>
                </h5>
              </div>
              <div className="col-12">
                <h5>
                  <label className="col-lg-6 text-left">Shipping Charge</label>
                  <b>
                    <label className="col-lg-6 text-right">0 Rs</label>
                  </b>
                </h5>
              </div>
              <div className="col-12">
                <hr />
                <h5>
                  <label className="col-lg-6 text-left">Final Amount</label>
                  <b>
                    <label className="col-lg-6 text-right">
                      {cartSummary.totalAmount} Rs{" "}
                    </label>
                  </b>
                </h5>
                <br />
                <Button
                  onClick={finalizeOrder}
                  className="btn btn-danger col-lg-12"
                >
                  Finalize Order
                </Button>
              </div>
            </div>
          ) : null}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CheckoutActionsComponent;
