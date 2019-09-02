import React from "react";
import { shallow,mount } from "enzyme";
import ProductCard from "./ProductCard";
import "../../../setupTests";
let props = {
    product :{
        id: "1237",
        name: "Recliner",
        price: 50000,
        currency: "Rs",
        description: "Fresh Pear",
        rating: 3.5,
        image: "images/recliner.jpg",
    },
};
const onAddToCart = jest.fn();
const cardComponent = mount(
  <ProductCard onAddToCart={onAddToCart} {...props} />
);

it("Renders product card component correctly " , ()=>{
    expect(cardComponent).toMatchSnapshot();
})

it("Renders the Product Name Correctly ", () => {
  expect(cardComponent.find(".product-name").text()).toEqual("Recliner");
  expect(cardComponent).toMatchSnapshot();
});

it("Calls `onAddToCart()` on Button Click" , () => {
    
    cardComponent
        .find("#addToCartBtn")
        .at(1)
        .simulate("click");
    expect(onAddToCart).toHaveBeenCalledTimes(1);
      expect(cardComponent).toMatchSnapshot();

});
