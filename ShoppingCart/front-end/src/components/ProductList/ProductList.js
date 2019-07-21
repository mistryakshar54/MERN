import React, { Component } from "react";
import ProductCardComponent from "./ProductCard/ProductCard";
import CardDeck from "react-bootstrap/CardDeck";
import { connect } from "react-redux";
import * as ProductActionCreator from "../../store/actioncreators/ProductActionCreator";

class ProductListComponent extends Component {
  componentDidMount() {
    this.props.onFetchProductsList();
  }
  render() {
    if (this.props.productsList && this.props.productsList.length > 0) {
      return (
        <div className="container">
          <CardDeck>
            {this.props.productsList.map((item, index) => {
              return (
                <ProductCardComponent product={item} key={"prod-" + index} />
              );
            })}
          </CardDeck>
        </div>
      );
    } else {
      return <h1>Loading..</h1>;
    }
  }
}

const mapStateToProps = state => {
  return {
    productsList: state.ProductsReducer.productsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProductsList: () => {
      dispatch(ProductActionCreator.fetchAllProductsThunk());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListComponent);
