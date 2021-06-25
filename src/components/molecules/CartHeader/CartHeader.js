import { Container } from "./CartHeader.styles";

const CartHeader = ({ closeCart, totalItems }) => {
  return (
    <Container>
      <div className="container__title">
        My Cart{" "}
        <span className="container__items">
          ({`${totalItems} ${totalItems > 1 ? "items" : "item"}`})
        </span>
      </div>
      <div className="container__close-cart" onClick={closeCart}>
        &#10006;
      </div>
    </Container>
  );
};

export default CartHeader;
