import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 550px;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: var(--clr-primary);
  .discover__container {
    display: flex;
    justify-content: space-between;
    width: 84%;
    margin: 0 auto;

    align-items: center;
  }
  .discover__article {
    width: 35%;
    margin-top: 60px;
    h1 {
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 3rem;
      color: var(--clr-white);
      margin-bottom: 35px;
    }
    p {
      font-family: var(--font-primary);
      font-weight: 400;
      font-size: 1.1rem;
      line-height: 1.6;
      color: var(--clr-white);
    }
    .btn {
      margin-top: 50px;
    }
  }
  .discover__image {
    position: relative;
    display: flex;
  }
  .img__container {
    width: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .image2 {
    position: absolute;
    top: 156px;
    right: 228px;
  }
  .image3 {
    position: absolute;
    top: 265px;
    right: -36px;
    z-index: 1;
  }
`;
