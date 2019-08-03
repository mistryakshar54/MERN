import React, { Component } from "react";
import ProductCardComponent from "./ProductCard/ProductCard";
import CardDeck from "react-bootstrap/CardDeck";
import { connect } from "react-redux";
import * as ProductActionCreator from "../../store/actioncreators/ProductActionCreator";
import * as MiniCartActionCreator from "../../store/actioncreators/MiniCartActionCreator";


class ProductListComponent extends Component {
  componentDidMount() {
    this.props.onFetchProductsList();
  }

  addToCartHandler = ( item ) => {
    console.log("ITem" , item);
    this.props.onAddToCart( item );
  }

  render() {
    if (this.props.productsList && this.props.productsList.length > 0) {
      return (
        <div className="container-fluid">
          <div className="d-flex p-2 justify-content-start flex-wrap">
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
