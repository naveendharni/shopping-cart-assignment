import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "store/cart/cartSlice";
import Images from "components/atoms/Image/Images";
import { CartProduct } from "./ProductCard.styles";
import getImage from "helpers/getImage";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const image = getImage(data.imageURL);

  const add = () => dispatch(addProduct(data));

  const remove = () => dispatch(removeProduct(data.id));

  return (
    <CartProduct key={data.id}>
      <Images src={image} alt={data.name} loading="lazy" />

      <div className="card">
        <div className="card__name">{data.name}</div>
        <div className="card__quantity">
          <button className="card__btn" onClick={remove}>
            -
          </button>
          <span className="card__total-item">{data.totalItem}</span>
          <button className="card__btn" onClick={add}>
            +
          </button>
          <span className="card__times">&#10006;</span>
          <span className="card__price">Rs.{data.price}</span>
        </div>
      </div>

      <div className="total-price">Rs.{data.totalItem * data.price}</div>
    </CartProduct>
  );
};

export default ProductCard;
