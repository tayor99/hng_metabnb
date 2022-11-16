import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 110px;
  .navbar__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 84%;
    margin: 0 auto;
  }
  .img__container {
    width: 233px;
    height: 36.67px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .nav-toggle {
    display: none;
    border-radius: 20px;
    background-color: transparent;
    border: none;
    color: var(--clr-black);
    cursor: pointer;
    > svg {
      font-size: 2.5rem;
    }
  }
  .navlinks {
    ul {
      display: flex;

      li {
        margin-right: 48px;
        list-style: none;
        .link {
          font-family: var(--font-primary);
          font-weight: 400;
          font-size: 1.25rem;
          color: var(--clr-black-2);
          cursor: pointer;
          text-decoration: none;
        }
      }
    }
  }
  @media (max-width: 1026px) {
    .navbar__container {
      width: 95%;
    }
    .navlinks {
      li {
        margin-right: 30px !important;
      }
    }
  }
  @media (max-width: 950px) {
    .nav-toggle {
      display: block;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .navbar__buttons {
      display: none;
    }
    .navlinks {
      display: none;
    }
  }
`;
