import React, { Component } from "react";
import { connect } from "react-redux";
import * as OrderActionCreator from "../../../store/actioncreators/OrderActionCreator";
import Table from "react-bootstrap/Table";
import Card from 'react-bootstrap/Card';
class OrderListComponent extends Component {
  componentDidMount(){
    this.props.onFetchOrderList();
  }
  render() {
    return (
      <Card>
        <Table className="text-centered" responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Order No</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          {/* <tbody>
            {cartItems.map((item, index) => {
              return (
                <tr key={"ci -" + index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    {item.price} {item.currency}
                  </td>
                  <td>
                    <FontAwesomeIcon
                      onClick={() => addQty(item)}
                      icon={faPlus}
                    />
                    <span
                      style={{
                        padding: "0% 10%"
                      }}
                    >
                      {item.qty}
                    </span>
                    <FontAwesomeIcon
                      onClick={() => reduceQty(item, index)}
                      icon={faMinus}
                    />
                  </td>
                  <td>
                    {item.price * item.qty} {item.currency}
                  </td>
                  <td>
                    <FontAwesomeIcon
                      onClick={() => removeItem(item, index)}
                      icon={faTrash}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody> */}
        </Table>
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderListComponent);
