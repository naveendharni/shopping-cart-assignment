import styled from "styled-components";
import { breakPoints } from "components/organisms/LoginBody/LoginBody.styles";

export const Container = styled.div`
  position: fixed;
  display: block;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: rgba(31, 32, 41, 0.75);
  opacity: 1;
  transition: opacity 250ms 700ms ease;
  .wrapper {
    width: 300px;
    height: 480px;
    background-color: #f0efef;
    z-index: 5;
    position: fixed;
    bottom: 0;
    right: 10%;
  }
  @media (max-width: ${breakPoints.tabletBreak}) {
    background-color: transparent;
    pointer-events: none;
    .wrapper {
      width: 100%;
      height: 84%;
      right: 0;
      pointer-events: auto;
    }
  }
`;
