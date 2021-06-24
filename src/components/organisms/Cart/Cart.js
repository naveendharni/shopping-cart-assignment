import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "store/cart/cartSlice";
import { Container } from "./Cart.styles";
import CartHeader from "../../molecules/CartHeader/CartHeader";
import NoItem from "../../molecules/NoCartItem/NoItem";
import CartBody from "../../molecules/CartBody/CartBody";
import CartFooter from "../../molecules/CartFooter/CartFooter";

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
