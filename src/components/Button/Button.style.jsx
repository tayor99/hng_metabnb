import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) =>
    props.variant === "outline" ? `var(--clr-white)` : ` var(--clr-primary)`};
  color: ${(props) =>
    props.variant === "outline" ? ` var(--clr-primary)` : `var(--clr-white)`};
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 170px;
  border-radius: 10px;
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
`;
export const InputButtons = styled(Button)`
  border-radius: 0px 8px 8px 0px;
  width: 100%;
  height: 54px;
`;
