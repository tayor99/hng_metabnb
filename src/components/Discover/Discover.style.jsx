import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 580px;
  padding-top: 170px;
  /* margin-top: 100px; */
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
  }
  .discover__image {
    position: relative;
    /* width: 65%; */
    display: flex;
    flex-direction: column;
  }

  .image1 {
    position: absolute;
    top: -212px;
    right: 75px;
  }
  .image2 {
    position: absolute;
    top: -49px;
    right: 300px;
  }
  .image3 {
    position: absolute;
    top: 51px;
    right: 47px;
  }
`;
