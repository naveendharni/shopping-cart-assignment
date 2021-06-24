import styled from "styled-components";
import { breakPoints } from "components/organisms/LoginBody/LoginBody.styles";

export const Container = styled.div`
  background-color: #000000;
  color: var(--white-color);
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d3d3d3;
  .title {
    font-size: 0.8rem;
    font-weight: 600;
    .items {
      font-size: 0.6rem;
      font-weight: 400;
    }
  }
  .close-cart {
    font-size: 0.8rem;
    cursor: pointer;
  }
  @media (max-width: ${breakPoints.tabletBreak}) {
    background-color: var(--white-color);
    color: #000000;
    .close-cart {
      display: none;
    }
  }
`;