import CustomButton from "components/atoms/Buttons/CustomButton";
import Description from "components/atoms/Descriptions/Description";
import Images from "components/atoms/Image/Images";
import { CategoryRow } from "./CategoryItem.styles";
import getImage from "helpers/getImage";

const CategoryItem = ({ item, index }) => {
  const image = getImage(item.imageUrl);
  return (
    <CategoryRow reverse={index % 2 != 0}>
      <div className="detail-img">
        <Images width="60%" src={image} alt={item.key} />
      </div>
      <div className="detail-container">
        <div className="detail-name">{item.name}</div>
        <Description className="detail-desc">{item.description}</Description>
        <CustomButton classes="home-btn">{`Explore ${item.key}`}</CustomButton>
      </div>
    </CategoryRow>
  );
};

export default CategoryItem;
