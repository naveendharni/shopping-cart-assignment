import Images from "components/atoms/Image/Images";
import { Container } from "./CarouselItem.styles";
import getImage from "helpers/getImage";

const CarouselItem = ({ item }) => {
  const image = getImage(item.bannerImageUrl);
  return (
    <Container>
      <Images src={image} alt={item.bannerImageAlt} />
    </Container>
  );
};

export default CarouselItem;
