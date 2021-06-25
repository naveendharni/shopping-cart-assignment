import styled from "styled-components";

export const CartProduct = styled.div`
  background-color: var(--white-color);
  margin: 0.5rem 0;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 15%;
  }
  .card {
    width: 65%;
    .card__name {
      font-weight: 600;
      font-size: 0.8rem;
      margin-bottom: 0.35rem;
    }
    .card__quantity {
      font-size: 0.8rem;
      .card__btn {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: #c41162;
        border: none;
        color: var(--white-color);
        cursor: pointer;
      }
      .card__times {
        margin: 0 0.5rem;
        font-weight: 400;
      }
      .card__total-item {
        font-weight: 600;
        margin: 0 0.5rem;
      }
    }
  }
  .total-price {
    font-size: 0.85rem;
    align-self: flex-end;
  }
`;
