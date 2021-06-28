import Heading from "components/atoms/Headings/Heading";
import Description from "components/atoms/Descriptions/Description";
import { Container } from "./LeftCard.styles";

const LeftCard = ({ title, description }) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      <Description>{description}</Description>
    </Container>
  );
};

export default LeftCard;
