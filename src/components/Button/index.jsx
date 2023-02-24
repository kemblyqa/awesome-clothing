import React from "react";
import { BaseButton, GoogleSignInButton, InvertedButton } from "./styles";

export const BUTTON_TYPE_CLASS = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASS.base) =>
  ({
    [BUTTON_TYPE_CLASS.base]: BaseButton,
    [BUTTON_TYPE_CLASS.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASS.inverted]: InvertedButton,
  }[buttonType]);

export const Button = ({ children, buttonType, ...props }) => {
  const Button = getButton(buttonType);
  return <Button {...props}>{children}</Button>;
};
