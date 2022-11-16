import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  .filter__container {
    width: 84%;
    margin: 40px auto;
    ul {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      align-items: center;
      li {
        list-style: none;
        margin: 10px 5px;
        font-family: var(--font-primary);
        font-weight: 400;
        font-size: 1.25rem;
        color: var(--clr-black-2);
        cursor: pointer;
        &:last-child {
          border: 1px solid var(--clr-grey-1);
          border-radius: 8px;
          padding: 14px;
          display: flex;

          img {
            margin-left: 42px;
          }
        }
      }
    }
  }
`;
