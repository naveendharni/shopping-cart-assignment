import styled from "styled-components";
import { breakPoints } from "components/organisms/LoginBody/LoginBody.styles";

export const Container = styled.nav`
  position: relative;
  right: 8rem;
  bottom: 1rem;
  .nav__links {
    text-decoration: none;
    color: grey;
    font-weight: 600;
    margin-right: 1rem;
  }
  @media (max-width: ${breakPoints.mobileBreak}) {
    right: 1rem;
  }
`;
