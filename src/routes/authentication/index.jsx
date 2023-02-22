import React from "react";
import { SignInForm } from "../../components/SignInForm";
import { SignUpForm } from "../../components/SignUpForm";

import './styles.scss'

export const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
