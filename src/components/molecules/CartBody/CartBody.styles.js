import styled from "styled-components";

export const Container = styled.div`
  overflow: auto;
  height: 75%;
`;

export const LowPrice = styled.div`
  padding: 0.7rem 0.4rem;
  margin: 0.3rem 0.6rem;
  border-radius: 0.2rem;
  background-color: var(--white-color);
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  .low__img {
    width: 25%;
    margin-right: 0.5rem;
  }
`;
