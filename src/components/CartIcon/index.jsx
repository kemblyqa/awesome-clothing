import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/action";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/selector";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./styles";

export const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
