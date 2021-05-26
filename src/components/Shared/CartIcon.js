import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "store/product/productSlice";
import { Container } from "./CartIcon.styles";
import Cart from "static/images/cart.svg";

const CartIcon = () => {
  const dispatch = useDispatch();
  const { totalProducts } = useSelector((state) => state.product);
  const openCart = () => dispatch(toggleCart(true));

  return (
    <Container onClick={openCart}>
      <img src={Cart} alt="cart-icon" />
      <span>{totalProducts} items</span>
    </Container>
  );
};

export default memo(CartIcon);
