import styled from "styled-components";
import { breakPoints } from "components/organisms/LoginBody/LoginBody.styles";

export const Container = styled.div`
  padding: 0.5rem 0 0;
`;

export const CategoryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.2rem;
  height: 200px;
  flex-direction: ${(props) => props.reverse && "row-reverse"};
  position: relative;
  border-top: 1px solid #d3d3d3;
  .category__detail-img {
    text-align: center;
  }
  .category__detail-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 105%;
    height: 160px;
    .category__detail-name,
    .category__detail-desc {
      font-size: 0.8rem;
    }
    .category__detail-name {
      font-weight: 600;
      font-size: 1rem;
    }
    @media (max-width: ${breakPoints.mobileBreak}) {
      .category__detail-name,
      .category__detail-desc {
        font-size: 0.5rem;
      }
    }
  }
  .category__home-btn {
    text-transform: initial;
  }
`;
