import React from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import "./ProductCard.scss";
const ProductCardComponent = ( props ) => {
    return (
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={props.product.image} />
        <Card.Body>
          <Card.Title>{props.product.name}</Card.Title>
          <Card.Text>{props.product.price}</Card.Text>
          <Button onClick={() => props.onAddToCart(props.product)} variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    );
}

export default ProductCardComponent