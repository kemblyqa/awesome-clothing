import React, { useContext } from "react";

import { Button, BUTTON_TYPE_CLASS } from "../Button";
import { CartContext } from "../../contexts/CartContext";
import { Footer, Name, Price, ProductCardContainer } from "./styles";

export const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
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
