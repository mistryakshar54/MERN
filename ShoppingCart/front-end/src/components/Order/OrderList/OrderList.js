import React, { Component } from "react";
import { connect } from "react-redux";
import * as OrderActionCreator from "../../../store/actioncreators/OrderActionCreator";
import Table from "react-bootstrap/Table";
import Card from 'react-bootstrap/Card';
import Loader from "../../Layout/Loader/Loader";
import './OrderList.scss';
class OrderListComponent extends Component {
  componentDidMount(){
    this.props.onFetchOrderList();
  }
  render() {
    const {orderList} = this.props;
    return (
      <Card>
        <Loader dataLoaded={orderList.length > 0 ? true : false }>
          <Table className="text-centered" responsive>
            <thead>
              <tr>
                <th>Order No</th>
                <th>Order Date</th>
                <th>Total Items</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((item, index) => {
                return (
                  <tr key={"ord -" + index}>
                    <td
                      className="itemLink"
                      onClick={() =>
                        this.props.onShowOrderDetails(item.orderNo)
                      }
                    >
                      {item.orderNo}
                    </td>
                    <td>{item.createdDate}</td>
                    <td>{item.orderitems.length}</td>
                    <td>
                      {item.paymentsummary.totalAmount}{" "}
                      {item.paymentsummary.currency}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Loader>
      </Card>
    );
  }
}
const mapStateToProps = state => {
  return {
    orderList: state.OrderReducer.orderList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchOrderList: () => {
      dispatch(OrderActionCreator.fetchAllUserOrdersThunk());
    },
    onShowOrderDetails: (orderId) => {
      dispatch(OrderActionCreator.fetchOrderDetailsThunk(orderId));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderListComponent);
