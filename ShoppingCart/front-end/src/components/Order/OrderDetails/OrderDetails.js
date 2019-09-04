import React, { Component } from "react";
import { connect } from "react-redux";
import CardDeck from "react-bootstrap/CardDeck";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import * as OrderActionCreator from "../../../store/actioncreators/OrderActionCreator";
import Loader from '../../Layout/Loader/Loader';
class OrderDetailsComponent extends Component {
  componentDidMount()
  {
    if(this.props.coreData.loadingState === false && !this.props.orderObject.currentOrder.orderitems)
    {
      this.props.onShowOrderDetails(this.props.match.params.orderId);
    }
  }
  render() { 
      let { orderitems, paymentsummary } = this.props.orderObject.currentOrder;
      return (
        <React.Fragment>
          <h1>Order Details</h1>
          <CardDeck>
            <Col>
              <Card>
                <Card.Body>
                  <Loader dataLoaded={orderitems ? true : false}>
                    <h2>Item Details</h2>
                    {orderitems ? (
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
                    ) : null}
                  </Loader>
                </Card.Body>
              </Card>
            </Col>
            <Col xs lg="4">
              <Card>
                  <Card.Body>
                  <loader dataLoaded={paymentsummary ? true : false}>
                    {paymentsummary ? (
                      <div>
                        <h2>Summary</h2>
                        <div className="col-12">
                          <label className="col-lg-4 text-left"> Amount </label>
                          <label className="col-lg-4 text-right">
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
                          <label className="col-lg-4 text-left">
                            Final Amount{" "}
                          </label>
                          <label className="col-lg-4 text-right">
                            {paymentsummary.totalAmount} Rs{" "}
                          </label>
                        </div>
                      </div>
                    ) : null}
                   </loader>
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
