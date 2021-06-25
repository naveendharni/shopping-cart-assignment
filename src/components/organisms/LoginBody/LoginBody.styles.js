import styled from "styled-components";

export const breakPoints = {
  mobileBreak: "650px",
  tabletBreak: "990px",
  laptopBreak: "1100px",
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  @media (max-width: ${breakPoints.mobileBreak}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const RightBody = styled.div`
  margin-left: 5rem;
  width: 25%;
  .right-body {
    display: flex;
    flex-direction: column;
    .MuiFormControl-root {
      margin-top: 0.5rem;
    }
    .MuiFormLabel-root {
      font-size: 0.8rem;
    }
  }
  .confirm-btn {
    margin-top: 2rem;
  }
  @media (max-width: ${breakPoints.tabletBreak}) {
    margin-left: 2rem;
    width: 35%;
  }
  @media (max-width: ${breakPoints.mobileBreak}) {
    margin-left: 0rem;
    width: 80%;
  }
`;
