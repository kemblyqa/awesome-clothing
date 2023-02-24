import React, { useContext } from "react";
import "./styles.scss";

import { Button, BUTTON_TYPE_CLASS } from "../Button";
import { CartContext } from "../../contexts/CartContext";

export const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        onClick={addProductToCart}
        buttonType={BUTTON_TYPE_CLASS.inverted}
      >
        Add to cart
      </Button>
    </div>
  );
};
