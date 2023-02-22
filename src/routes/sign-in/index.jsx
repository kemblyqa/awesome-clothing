import React from "react";
import { SignUpForm } from "../../components/SignUpForm";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase";

export const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      <SignUpForm/>
    </div>
  );
};
