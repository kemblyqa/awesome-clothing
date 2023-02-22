import React from "react";
import './styles.scss';

const BUTTON_TYPE_CLASS = {
  google: "google-sign-in",
  inverted: "inverted",
};

export const Button = ({ children, buttonType, ...props }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`}
      {...props}
    >
      {children}
    </button>
  );
};
