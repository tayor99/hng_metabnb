import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 24px;
  border: 1px solid #d7d7d7;
  border-radius: 15px;
  cursor: pointer;
  .img__container {
    padding: 16px;
    width: 265px;
    height: 270px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .housing__details {
    padding: 0 16px 16px 16px;
    .housing__name {
      display: flex;
      justify-content: space-between;
    }
    .availability {
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
    }
    .price {
      font-weight: 700;
    }
    p {
      font-family: var(--font-primary);
      font-weight: 400;
      font-size: 0.75rem;
      color: var(--clr-black-2);
    }
    .rating {
      margin-top: 15px;
      svg {
        color: var(--clr-primary);
        font-size: 0.9rem;
        margin-right: 6px;
      }
    }
  }
`;
