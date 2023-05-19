import styled from "styled-components";

export const JoinStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 650px;
  padding: 50px;
  background-color: #ffffff;
  margin: 0 auto;
  min-height: 100vh;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 10%), 0px 2px 4px rgb(0 0 0 / 20%);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const JoinTitleStyled = styled.h1`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin-bottom: 40px;
  text-align: center;
  margin-top: 110px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: 80px;
    margin-bottom: 30px;
  }
`;

export const InputLabelStyled = styled.span`
  color: #666;
  font-size: 14px;
`;

export const JoinFormsTitleStyled = styled.h3`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 1px solid #e3e3e3;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const JoinFormStyled = styled.div`
  width: 100%;

  input {
    margin-bottom: 10px;
  }

  margin-bottom: 30px;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 16px;
  font-size: 1.3rem;
  border-radius: 4px;
  height: 55px;
  border: 1px solid #e3e3e3;
  margin-top: 5px;
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
    font-size: 1.1rem;
    height: 45px;
    width: 100%;
  }
`;

export const RegisterButton = styled.button`
  margin-top: 10px;
  width: 60%;
  padding: 24px 20px;
  background-color: #b3933b;
  color: #fff;
  border-radius: 4px;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  text-decoration-line: none;

  &:hover {
    background-color: #008000;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    margin-right: 0;
    margin-bottom: 20px;
    font-size: 1.1em;
  }
`;
