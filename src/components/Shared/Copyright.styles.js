import styled from "styled-components";
import { breakPoints } from "components/LoginBody/LoginBody.styles";

export const Container = styled.div`
  background: lightgray;
  padding: 0.8rem 1.5rem 0.8rem 15%;
  font-weight: 600;
  z-index: 2;
  position: relative;
  @media (max-width: ${breakPoints.tabletBreak}) {
    padding: 0.8rem 0;
    text-align: center;
  }
`;
