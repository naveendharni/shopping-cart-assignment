import styled from "styled-components";
import { breakPoints } from "components/organisms/LoginBody/LoginBody.styles";

export const Container = styled.div`
  margin: 90px 10rem 0;
  @media (max-width: ${breakPoints.tabletBreak}) {
    margin: 90px 0;
  }
  .carousel .control-dots .dot {
    background: #423c3c;
  }
  .carousel.carousel-slider .control-arrow {
    background: rgba(0, 0, 0, 0.4);
  }
`;
