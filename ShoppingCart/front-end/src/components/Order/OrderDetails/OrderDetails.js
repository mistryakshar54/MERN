import React, { Component } from "react";
import { connect } from "react-redux";
import CardDeck from "react-bootstrap/CardDeck";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class OrderDetailsComponent extends Component {
  render() {
    //TODO: Add check for spinner and empty data!!
    if (this.props.coreData.loading === true) {
      return <h1>Loading Data</h1>;
    }
    else if( !this.props.orderObject && !this.props.orderObject.currentOrder)
    {
        return <h1>No data received</h1>;
    }
    else {
      let { orderitems, paymentsummary } = this.props.orderObject.currentOrder;
      return (
        <React.Fragment>
          <h1>Order Details</h1>
          <CardDeck>
            <Col>
              <Card>
                <Card.Body>
                  <h2>Item Details</h2>
                  <Table className="text-centered" responsive>
                    <tbody>
                      {orderitems.map((item, index) => {
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
                        <td colSpan="4" className="text-right">
                          Total
                        </td>
                        <td>{paymentsummary.totalAmount} Rs </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
            <Col xs lg="4">
              <Card>
                <Card.Body>
                  <h2>Summary</h2>
                  <div className="col-12">
                    <label className="col-lg-4 text-left"> Amount </label>
                    <label className="col-lg-4 text-right">
                      {" "}
                      {paymentsummary.totalAmount} Rs{" "}
                    </label>
                  </div>
                  <div className="col-12">
                    <label className="col-lg-4 text-left">
                      Shipping Charge{" "}
                    </label>
                    <label className="col-lg-4 text-right">0 Rs </label>
                  </div>
                  <div className="col-12">
                    <hr />
                    <label className="col-lg-4 text-left">Final Amount </label>
                    <label className="col-lg-4 text-right">
                      {paymentsummary.totalAmount} Rs{" "}
                    </label>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </CardDeck>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    orderObject: state.OrderReducer,
    coreData: state.CoreReducer
  };
};
// const mapDispatchToProps = ( dispatch ) => {
//     return{

//     }
// }

export default connect(mapStateToProps)(OrderDetailsComponent);
