import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./styles";

export const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};
