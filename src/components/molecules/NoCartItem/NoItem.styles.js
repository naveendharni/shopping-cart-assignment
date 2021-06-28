import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white-color);
  height: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .container__no-item {
    text-align: center;
    .container__heading {
      font-size: 0.8rem;
    }
  }
  .container__shopping {
    position: absolute;
    bottom: 0.5rem;
    width: 90%;
    text-transform: initial;
  }
`;
