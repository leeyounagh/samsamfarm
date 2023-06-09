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
    border-color: #b3933b;
  }

  &:hover {
    border-color: #b3933b;
  }

  &:disabled {
    border-color: #e3e3e3;
  }
  @media (max-width: 768px) {
    height: 40px;
    font-size: 14px;
    padding: 12px;
  }
`;
