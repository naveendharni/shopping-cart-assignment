import styled from "styled-components";
import { breakPoints } from "components/LoginBody/LoginBody.styles";

export const Container = styled.div`
  width: 210px;
  height: 100%;
  background: #e3dede;
  padding: 0rem 0.7rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  z-index: 2;
  @media (max-width: ${breakPoints.laptopBreak}) {
    width: 200px;
  }
  @media (max-width: ${breakPoints.tabletBreak}) {
    width: 180px;
  }
  @media (max-width: 800px) {
    width: 160px;
  }
  @media (max-width: ${breakPoints.mobileBreak}) {
    display: none;
  }
`;

export const CategoryItem = styled.div`
  color: ${(props) => (props.active ? "#008000" : "#787272")};
  border-bottom: 1px solid #838080;
  width: 100%;
  padding: 0.5rem 0.2rem 0.5rem 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  user-select: none;
  &:hover {
    color: #030d03;
  }
`;
