import styled from "styled-components";

export const InputStyled = styled.input`
  width: 100%;
  padding: 16px;
  font-size: 16px;
  border-radius: 4px;
  height: 48px;
  border: 1px solid #e3e3e3;
  outline: none;
  transition: border-color 0.15s ease-in-out;

  &:focus {
    border-color: #7a99ff;
  }

  &:hover {
    border-color: #7a99ff;
  }

  &:disabled {
    border-color: #e3e3e3;
  }
`;
