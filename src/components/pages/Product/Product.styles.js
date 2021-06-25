import styled from "styled-components";
import { breakPoints } from "components/organisms/LoginBody/LoginBody.styles";

export const Container = styled.div`
  margin: 83px 10rem 0;
  position: relative;
  @media (max-width: ${breakPoints.tabletBreak}) {
    margin: 75px 0;
  }
`;
