import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 110px;
  .navbar__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 87.5%;
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
  .navlinks {
    ul {
      display: flex;

      li {
        margin-right: 48px;
        list-style: none;
        span {
          font-family: var(--font-primary);
          font-weight: 400;
          font-size: 1.25rem;
          color: var(--clr-black-2);
          cursor: pointer;
        }
      }
    }
  }
`;
