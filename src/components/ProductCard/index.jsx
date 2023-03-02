import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/action";
import { selectCartItems } from "../../store/cart/selector";

import { Button, BUTTON_TYPE_CLASS } from "../Button";
import { Footer, Name, Price, ProductCardContainer } from "./styles";

export const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        onClick={addProductToCart}
        buttonType={BUTTON_TYPE_CLASS.inverted}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};
