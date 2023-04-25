import styled from "styled-components";

export const CheckboxStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  input[type="checkbox"] {
    margin: 0;
    width: 18px;
    height: 18px;
  }

  span {
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
  }
`;
