import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from "./styles";

import { UserContext } from "../../contexts/UserContext";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase";
import { CartIcon } from "../../components/CartIcon";
import { CartDropdown } from "../../components/CartDropdown";
import { CartContext } from "../../contexts/CartContext";

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
