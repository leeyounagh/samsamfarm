import styled from "styled-components";

interface ButtonProps {
  outline?: boolean;
  cancel?: boolean;
}

export const ButtonStyled = styled.button<ButtonProps>`
  color: #fff;
  background-color: #b3933b;
  font-size: 16px;
  padding: 16px;
  width: 100%;
  font-weight: 600;
  border-radius: 4px;
  border: 1px solid #b3933b;
  cursor: pointer;

  &:disabled {
    background-color: #e3e3e3;
    pointer-events: none;
    border-color: #e3e3e3;
  }

  ${(props) =>
    props.outline
      ? `
    background-color: #fff;
    color: #b3933b;
    border: 1px solid #b3933b;  
  `
      : ``}

  ${(props) =>
    props.cancel
      ? `
    background-color: #fff;
    color: #666;
    border: 1px solid #c4c4c4;
    &:hover {
      border-color: #787878;
    }
  `
      : ``}
`;
