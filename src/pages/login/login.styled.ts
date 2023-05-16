import styled from "styled-components";

export const LoginStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 650px;
  padding: 50px;
  background-color: #ffffff;
  margin: 50px auto;
  height: 100vh;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 10%), 0px 2px 4px rgb(0 0 0 / 20%);
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const LoginTitleStyled = styled.h1`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin-bottom: 40px;
  padding-top: 110px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 24px;
    padding-top: 80px;
  }
`;

export const LoginFormStyled = styled.div`
  width: 100%;

  input {
    margin-bottom: 10px;
    width: 100%;
  }
`;

export const LoginFormsValidStyled = styled.p`
  width: 100%;
  color: #ff0000;
  font-size: 12px;
  letter-spacing: -0.5px;
`;

export const LoginButtonWrapStyled = styled.div`
  width: 100%;
  margin-top: 60px;

  button {
    margin-bottom: 10px;
    width: 100%;
  }
`;

export const LoginFindIdAndPasswordStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  span {
    display: inline-block;
    width: 1px;
    height: 20px;
    background-color: #242424;
    margin: 0 12px;
  }

  a {
    display: inline-block;
    color: #242424;
    cursor: pointer;
    font-size: 14px;
    letter-spacing: -0.5px;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;

    span {
      height: 16px;
    }

    a {
      font-size: 12px;
    }
  }
`;
