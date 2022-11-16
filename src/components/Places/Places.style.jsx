import styled from "styled-components";

export const Wrapper = styled.div`
  width: 84%;
  margin: 0 auto;
  .places__container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 28px 0;
  }
  @media (max-width: 950px) {
    .places__container {
      justify-content: center;
    }
  }
  @media (max-width: 770px) {
    width: 90%;
  }
`;
