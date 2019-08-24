import React from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import "./ProductCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const ProductCardComponent = ( props ) => {
    return (
      <Card className="product-card" style={{ width: "20rem" }}>
        <Card.Img variant="top" src={props.product.image} />
        <Card.Body>
          <label className="col-12 product-name text-left">
            {props.product.name}
          </label>
          <label className="col-12 product-price text-left">
            {props.product.price}&nbsp;{props.product.currency}
            {/* <span className="text-muted">kg</span> */}
          </label>
          <Button
            onClick={() => props.onAddToCart(props.product)}
            variant="danger"
            className="col-12"
          >
            <FontAwesomeIcon icon={faShoppingCart} />&nbsp;
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    );
}

export default ProductCardComponent