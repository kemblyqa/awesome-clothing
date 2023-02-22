import React from "react";
import { Button } from "../Button";
import "./styles.scss";

export const CartDropdown = () => {
  return <div className="cart-dropdown-container">
    <div className="cart-items"/>
    <Button>GO TO CHECKOUT</Button>
  </div>;
};
