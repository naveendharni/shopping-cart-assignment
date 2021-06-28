import styled from "styled-components";
import { breakPoints } from "components/organisms/LoginBody/LoginBody.styles";

export const Container = styled.div`
  width: 200px;
  margin: 0.5rem 0.5rem 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dotted #d3d3d3;
  .item__product-name {
    min-height: 50px;
  }
  .item__product-wrap {
    .item__img {
      height: 180px;
    }
    .item__description {
      background-color: #d3d3d3;
      font-size: 0.8rem;
      font-weight: 600;
      padding: 0.5rem;
      min-height: 85px;
    }
  }
  .item__product-footer {
    display: flex;
    font-size: 0.8rem;
    font-weight: 600;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.2rem 0;
  }
  .item__tablet-footer,
  .item__mobile-footer {
    display: none;
  }
  @media (max-width: ${breakPoints.laptopBreak}) {
    width: 190px;
  }
  @media (max-width: ${breakPoints.tabletBreak}) {
    width: 45%;
    .item__product-wrap {
      display: flex;
      .item__img {
        height: 120px;
      }
      .item__description {
        padding: 0.2rem 0.3rem;
      }
    }
    .item__tablet-footer {
      display: block;
    }
    .item__product-footer {
      display: none;
    }
    .item__mobile-btn {
      margin-top: 0.5rem;
      width: 100%;
    }
  }
  @media (max-width: ${breakPoints.mobileBreak}) {
    width: 90%;
    justify-content: center;
    .item__product-wrap .item__img {
      height: auto;
      width: 40%;
      margin-right: 1rem;
    }
    .item__mobile-footer {
      display: block;
    }
    .item__tablet-footer {
      display: none;
    }
  }
`;
