import styled from "styled-components";
import { breakPoints } from "components/organisms/LoginBody/LoginBody.styles";

export const Container = styled.footer`
  background: lightgray;
  padding: 0.8rem 1.5rem 0.8rem 15%;
  font-weight: 600;
  z-index: 2;
  position: relative;
  margin-top: auto;
  @media (max-width: ${breakPoints.tabletBreak}) {
    padding: 0.8rem 0;
    text-align: center;
  }
`;
