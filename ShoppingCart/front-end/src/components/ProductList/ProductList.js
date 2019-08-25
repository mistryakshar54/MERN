import React, { Component } from "react";
import ProductCardComponent from "./ProductCard/ProductCard";
import CardDeck from "react-bootstrap/CardDeck";
import { connect } from "react-redux";
import * as ProductActionCreator from "../../store/actioncreators/ProductActionCreator";
import * as MiniCartActionCreator from "../../store/actioncreators/MiniCartActionCreator";
import Loader from "../Layout/Loader/Loader";


class ProductListComponent extends Component {
  componentDidMount() {
    this.props.onFetchProductsList();
  }

  addToCartHandler = ( item ) => {
    this.props.onAddToCart( item );
  }

  render() {
      return (
        <div className="container-fluid">
          <Loader dataLoaded={this.props.productsList.length > 0 ? true : false}>
            <div className="d-flex p-2 justify-content-start flex-wrap product-list">
              {this.props.productsList.map((item, index) => {
                return (
                  <ProductCardComponent
                    product={item}
                    key={"prod-" + index}
                    onAddToCart={this.addToCartHandler}
                  />
                );
              })}
            </div>
          </Loader>
        </div>
      );
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
    },
    onAddToCart: (productData) => {
      dispatch(MiniCartActionCreator.addProductToCartThunk( productData ) )
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListComponent);
