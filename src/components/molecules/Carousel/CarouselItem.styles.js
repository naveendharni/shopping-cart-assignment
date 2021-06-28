import styled from "styled-components";
import { breakPoints } from "components/organisms/LoginBody/LoginBody.styles";

export const Container = styled.div`
  img {
    height: 200px;
    @media (max-width: ${breakPoints.tabletBreak}) {
      height: 150px;
    }
    @media (max-width: ${breakPoints.mobileBreak}) {
      height: 100px;
    }
  }
`;
