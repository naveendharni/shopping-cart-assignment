import { useDispatch } from "react-redux";
import { addProduct } from "store/cart/cartSlice";
import Images from "components/atoms/Image/Images";
import CustomButton from "components/atoms/Buttons/CustomButton";
import { Container } from "./Item.styles";
import getImage from "helpers/getImage";

const Item = ({ data }) => {
  const dispatch = useDispatch();
  const image = getImage(data.imageURL);
  const addToCart = () => {
    dispatch(addProduct(data));
  };
  return (
    <Container>
      <h3 className="product-name">{data.name}</h3>
      <div className="product-wrap">
        <Images src={image} alt={data.name} loading="lazy" />
        <div>
          <div className="description">{data.description}</div>
          <div className="mobile-footer">
            <CustomButton
              classes="mobile-btn"
              onClick={addToCart}
            >{`Buy Now @ Rs.${data.price}`}</CustomButton>
          </div>
        </div>
      </div>
      <div className="product-footer">
        <div className="price">MRP Rs.{data.price}</div>
        <CustomButton onClick={addToCart}>Buy Now</CustomButton>
      </div>
      <div className="tablet-footer">
        <CustomButton
          classes="mobile-btn"
          onClick={addToCart}
        >{`Buy Now @ Rs.${data.price}`}</CustomButton>
      </div>
    </Container>
  );
};

// export const BuyBtn = ({ view, addToCart, price }) => (
//   <div className={`${view}-footer`}>
//     <CustomButton
//       classes="mobile-btn"
//       onClick={addToCart}
//     >{`Buy Now @ Rs.${price}`}</CustomButton>
//   </div>
// );

export default Item;
