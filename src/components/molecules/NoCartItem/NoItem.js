import CustomButton from "components/atoms/Buttons/CustomButton";
import { Container } from "./NoItem.styles";

const NoItem = ({ closeCart }) => {
  return (
    <Container>
      <div className="container__no-item">
        <h4>No items in your cart</h4>
        <div className="container__heading">
          Your favourite items are just a click away
        </div>
      </div>
      <CustomButton classes="container__shopping" onClick={closeCart}>
        Start Shopping
      </CustomButton>
    </Container>
  );
};

export default NoItem;
