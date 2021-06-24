import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "store/cart/cartSlice";
import { Container } from "./CartIcon.styles";
import Cart from "static/images/cart.svg";

const CartIcon = () => {
  const dispatch = useDispatch();
  const { totalProducts } = useSelector((state) => state.cart);
  const openCart = () => dispatch(toggleCart());

  return (
    <Container onClick={openCart}>
      <img src={Cart} alt="cart-icon" />
      <span>{totalProducts} items</span>
    </Container>
  );
};

export default memo(CartIcon);
