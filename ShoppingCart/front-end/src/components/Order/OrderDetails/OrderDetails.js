import React, { Component } from "react";
import { connect } from "react-redux";
import CardDeck from "react-bootstrap/CardDeck";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import * as OrderActionCreator from "../../../store/actioncreators/OrderActionCreator";
import Loader from '../../Layout/Loader/Loader';
import './OrderDetails.scss';
import Button from "react-bootstrap/Button";

class OrderDetailsComponent extends Component {
  componentDidMount() {
    if (
      this.props.coreData.loadingState === false &&
      !this.props.orderObject.currentOrder.orderitems
    ) {
      this.props.onShowOrderDetails(this.props.match.params.orderId);
    }
  }
  redirectToOrders = () => {
    this.props.history.push("/orders");
  };
  getFormattedDate = (dateData) => {
    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let current_datetime = new Date(dateData);
    let formatted_date = months[current_datetime.getMonth()]+" " +current_datetime.getDate() + " " + current_datetime.getFullYear()
    return formatted_date;
  }
  render() {
    let {
      orderitems,
      paymentsummary,
      orderNo,
      userName,
      createdDate
    } = this.props.orderObject.currentOrder;
    return (
      <React.Fragment>
        <CardDeck>
          <Col>
            <Card>
              <Card.Body className="padded-card order-details">
                <Loader dataLoaded={orderitems ? true : false}>
                  <h2 className="app-header-red">Order Information</h2>
                  <br />
                  <h5 className="text-left">
                    Order # : <b>{orderNo}</b>
                  </h5>
                  <h5 className="text-left">
                    Created By : <b>{userName}</b>
                  </h5>
                  <h5 className="text-left">
                    Created On : <b>{this.getFormattedDate(createdDate)}</b>
                  </h5>
                  <br />
                </Loader>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="padded-card order-details">
                <Loader dataLoaded={orderitems ? true : false}>
                  <h2 className="app-header-red">Order Items</h2>
                  {orderitems ? (
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
                        {orderitems.map((item, index) => {
                          return (
                            <tr key={"ci -" + index}>
                              <td className="display-flex">
                                <img
                                  src={"../" + item.image}
                                  className="prod-img"
                                  alt={item.name}
                                />
                                <label className="product-label" style={ { 'marginLeft' : '10px' } }>
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
                </Loader>
              </Card.Body>
            </Card>
          </Col>
          <Col xs lg="4">
            <Card style={{ marginTop: "20px" }}>
              <Card.Body style={{ padding: "3%" }}>
                <Loader dataLoaded={paymentsummary ? true : false}>
                  {paymentsummary ? (
                    <div>
                      <h2 className="col-12 app-header-red">Payment Summary</h2>
                      <div className="col-12">
                        <br />
                        <h5>
                          <label className="col-lg-6 text-left">Amount</label>
                          <b>
                            <label className="col-lg-6 text-right">
                              {paymentsummary.totalAmount} Rs
                            </label>
                          </b>
                        </h5>
                      </div>
                      <div className="col-12">
                        <h5>
                          <label className="col-lg-6 text-left">
                            Shipping Charge
                          </label>
                          <b>
                            <label className="col-lg-6 text-right">0 Rs</label>
                          </b>
                        </h5>
                      </div>
                      <div className="col-12">
                        <hr />
                        <h5>
                          <label className="col-lg-6 text-left">
                            Final Amount
                          </label>
                          <b>
                            <label className="col-lg-6 text-right">
                              {paymentsummary.totalAmount} Rs{" "}
                            </label>
                          </b>
                        </h5>
                        <br />
                        <Button
                          className="btn btn-danger col-lg-12"
                          onClick={this.redirectToOrders}
                        >
                          Back to Orders
                        </Button>
                      </div>
                    </div>
                  ) : null}
                </Loader>
              </Card.Body>
            </Card>
          </Col>
        </CardDeck>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderObject: state.OrderReducer,
    coreData: state.CoreReducer
  };
};
const mapDispatchToProps = ( dispatch ) => {
    return {
      onShowOrderDetails: orderId => {
        dispatch(OrderActionCreator.fetchOrderDetailsThunk(orderId));
      }
    };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetailsComponent);
