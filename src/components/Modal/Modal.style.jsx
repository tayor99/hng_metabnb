import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal__content {
    width: 40%;
    background-color: var(--clr-white);
    border-radius: 16px;
    border: none;
  }
  .modal__header {
    border: 1px solid #cfd8dc;
    /* padding: 20px 30px; */
    .modal__headerContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      margin: 20px auto;
      h1 {
        font-family: var(--font-primary);
        font-weight: 700;
        font-size: 1.5rem;
        color: var(--clr-black-5);
      }
      svg {
        font-size: 1.2rem;
        color: #191919;
        cursor: pointer;
      }
    }
  }
  .modal__body {
    width: 90%;
    margin: 20px auto;
    margin-bottom: 35px;
    p {
      font-family: var(--font-primary);
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      color: var(--clr-black-5);
    }
  }
  .modal__buttons {
    margin-top: 16px;
    button {
      width: 100%;
      margin-bottom: 20px;
      padding: 12px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--clr-white);
      outline: none;
      border-radius: 16px;
      cursor: pointer;
      border: 1px solid #cfd8dc;
      border-radius: 12px;
      transition: all 0.5s;
      &:hover {
        background: #f8f9fa;
      }
      .logo {
        display: flex;
        align-items: center;
        span {
          font-family: var(--font-2);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--clr-black);
        }
        img {
          width: 44px;
          height: 44px;
          margin-right: 16px;
        }
      }
      svg {
        color: #959da6;
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 850px) {
    .modal__content {
      width: 70%;
    }
  }
  @media (max-width: 550px) {
    .modal__content {
      width: 90%;
    }
  }
`;
