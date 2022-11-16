import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  margin-top: 67px;
  background-color: var(--clr-primary);
  .sponsor__container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
  }
  .sponsor__logo {
    width: 120px;
    img {
      width: 100%;
    }
  }
  @media (max-width: 600px) {
    .sponsor__container {
      width: 95%;
    }
  }
`;
