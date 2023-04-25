import styled from "styled-components";

export const ButtonStyled = styled.button`
  color: #fff;
  background-color: #14b36b;
  font-size: 16px;
  padding: 16px;
  width: 100%;
  font-weight: 600;
  border-radius: 4px;
  border: 1px solid #14b36b;
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
    color: #14b36b;
    border: 1px solid #14b36b;  
  `
      : ``}

  ${(props) =>
    props.cencel
      ? `
    background-color: #fff;
    color: #666;
    border: 1px solid #c4c4c4;
    &:hover {
          border-color: #787878
    }
  `
      : ``}
`;
