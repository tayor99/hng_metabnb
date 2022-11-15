import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  .favouriteHouses__container {
    width: 84%;
    margin: 0 auto;
    h1 {
      text-align: center;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 3rem;
      color: var(--clr-black);
    }
  }
  .favouriteHouses__body {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 28px 0;
  }
`;
