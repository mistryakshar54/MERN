import React, { Component } from "react";
import { connect } from "react-redux";
import * as OrderActionCreator from "../../../store/actioncreators/OrderActionCreator";
class OrderListComponent extends Component {
  componentDidMount(){
    this.props.onFetchOrderList();
  }
  render() {
    return <h1>Order List Come Here!!</h1>;
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderListComponent);
