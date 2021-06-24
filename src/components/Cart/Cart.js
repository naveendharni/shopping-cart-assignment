import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "store/cart/cartSlice";
import { Container } from "./Cart.styles";
import CartHeader from "./CartHeader";
import NoItem from "./NoItem";
import CartBody from "./CartBody";
import CartFooter from "./CartFooter";

const Cart = () => {
  const dispatch = useDispatch();
  const { totalProducts, totalPrice, cartItems } = useSelector(
    (state) => state.cart
  );

  const closeCart = () => dispatch(toggleCart());
  return (
    <Container>
      <div className="wrapper">
        <CartHeader closeCart={closeCart} totalItems={totalProducts} />
        {totalProducts < 1 ? (
          <NoItem closeCart={closeCart} />
        ) : (
          <>
            <CartBody data={cartItems} />
            <CartFooter closeCart={closeCart} totalprice={totalPrice} />
          </>
        )}
      </div>
    </Container>
  );
};

export default Cart;
