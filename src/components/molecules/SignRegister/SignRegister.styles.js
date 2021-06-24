import styled from "styled-components";
import { breakPoints } from "components/organisms/LoginBody/LoginBody.styles";

export const Container = styled.nav`
  position: absolute;
  right: 12.5rem;
  top: 0;
  .links {
    font-size: 0.75rem;
    font-weight: 600;
    text-decoration: none;
    color: #000000;
    margin-right: 1rem;
    cursor: pointer;
  }
  @media (max-width: ${breakPoints.tabletBreak}) {
    right: 0;
  }
  @media (max-width: ${breakPoints.mobileBreak}) {
    display: none;
  }
`;
