import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  background-color: var(--clr-black-4);
  padding: 63px 0 37px 0;
  .footer__container {
    display: flex;
    justify-content: space-between;
    width: 84%;
    margin: 0 auto;
  }
  .company {
    width: 40%;
  }
  .social__links {
    margin-top: 100px;
    svg {
      color: var(--clr-white-2);
      font-size: 1.2rem;
      margin-right: 28px;
      cursor: pointer;
    }
  }
  .certification {
    p {
      font-family: var(--font-primary);
      font-weight: 400;
      font-size: 1rem;
      color: var(--clr-white-2);
      margin-top: 40px;
    }
  }
  .footer__links {
    width: 60%;
    display: flex;
    justify-content: space-between;
    h1 {
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 1.1rem;
      color: var(--clr-white);
    }
    ul {
      margin-top: 23px;
    }
    li {
      list-style: none;
      font-family: var(--font-primary);
      font-weight: 400;
      font-size: 1rem;
      color: var(--clr-white-3);
      margin-bottom: 16px;
      cursor: pointer;
    }
  }
  @media (max-width: 800px) {
    .footer__container {
      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */
    }
  }
`;
