import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  .hero__container {
    width: 84%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .hero__content {
    width: 55%;
    margin-bottom: 25px;
    h1 {
      font-family: var(--font-primary);
      font-weight: 400;
      font-size: 3.5rem;
      color: var(--clr-black-2);
      line-height: 1.4;
      span {
        color: var(--clr-primary);
      }
    }
    p {
      margin-top: 48px;
      padding-right: 50px;
      font-family: var(--font-primary);
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 1.4;
      color: var(--clr-black-2);
    }
  }
  .hero__form {
    margin-top: 40px;
    width: 90%;
  }
  .form__input {
    display: flex;
    input {
      border: 1px solid var(--clr-black-3);
      border-radius: 8px 0px 0px 8px;
      width: 60%;
      outline: none;
      color: var(--clr-black-2);
      padding-left: 15px;
      font-size: 1.1rem;
      font-family: var(--font-primary);
      &::placeholder {
        font-family: var(--font-primary);
        font-weight: 400;
        font-size: 1rem;
        color: var(--clr-grey);
      }
    }
    .btn {
      width: 40%;
    }
  }
  .hero__images {
    display: flex;
    .img__bottom {
      margin-top: 100px;
    }
    .img__container {
      width: 97%;
      height: 176px;
      margin: 0px 0px 7px 7px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  @media (max-width: 1024px) {
    .hero__container {
      width: 95%;
    }
    .hero__content {
      h1 {
        line-height: 1.2;
      }
      p {
        margin-top: 30px !important;
      }
    }
  }
  @media (max-width: 1024px) {
    .hero__container {
      display: flex;
      flex-direction: column;
      .hero__content {
        width: 90%;
      }
    }
  }
  @media (max-width: 600px) {
    .hero__content {
      width: 95%;
    }
  }
`;
