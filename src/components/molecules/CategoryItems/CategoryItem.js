import CustomButton from "components/atoms/Buttons/CustomButton";
import Description from "components/atoms/Descriptions/Description";
import Images from "components/atoms/Image/Images";
import { CategoryRow } from "./CategoryItem.styles";
import getImage from "helpers/getImage";

const CategoryItem = ({ item, index }) => {
  const image = getImage(item.imageUrl);
  return (
    <CategoryRow reverse={index % 2 != 0}>
      <div className="category__detail-img">
        <Images width="60%" src={image} alt={item.key} />
      </div>
      <div className="category__detail-container">
        <div className="category__detail-name">{item.name}</div>
        <Description className="category__detail-desc">{item.description}</Description>
        <CustomButton classes="category__home-btn">{`Explore ${item.key}`}</CustomButton>
      </div>
    </CategoryRow>
  );
};

export default CategoryItem;
