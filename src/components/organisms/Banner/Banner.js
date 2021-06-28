import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "components/molecules/Carousel/CarouselItem";

const Banner = ({ data }) => {
  return (
    <Carousel className="banner-top" showStatus={false} showThumbs={false}>
      {data.map((item) => (
        <CarouselItem key={item.id} item={item} />
      ))}
    </Carousel>
  );
};

export default Banner;
