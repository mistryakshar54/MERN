import React from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import "./ProductCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";

const ProductCardComponent = ( props ) => {
  const onAddToCartHandler = (productData) =>{
    props.onAddToCart(productData);
  }
    return (
      <Card className="product-card" style={{ width: "20rem" }}>
        <Card.Img variant="top" src={props.product.image} />
        <Card.Body>
          <div className="col-12 product-label">
            <label className="col-7 product-name text-left">
              {props.product.name}
            </label>
            <label className="col-5 product-price text-right">
              {props.product.price}&nbsp;{props.product.currency}
              {/* <span className="text-muted">kg</span> */}
            </label>
          </div>
          <div className="col-12">
            <label className="col-6 product-rating text-left">
              <FontAwesomeIcon icon={faStar} />
              {props.product.rating}
            </label>
            <Button
              onClick={() => onAddToCartHandler(props.product)}
              variant="danger"
              id="addToCartBtn"
              className="col-6 add-to-cart"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              &nbsp; Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
}

export default ProductCardComponent