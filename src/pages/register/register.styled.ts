import styled from "styled-components";

export const JoinStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  padding: 50px;
  background-color: #ffffff;
  margin: 30px auto;
  height: 1500px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 10%), 2px 2px 4px rgb(0 0 0 / 20%);
`;

export const JoinTitleStyled = styled.h1`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin-bottom: 40px;
  text-align: center;
  margin-top: 50px;
`;

export const JoinFormsTitleStyled = styled.h3`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 1px solid #e3e3e3;
  margin-bottom: 20px;
`;

export const JoinFormStyled = styled.div`
  width: 100%;
  input {
    margin-bottom: 10px;
  }
  margin-bottom: 30px;
`;

export const JoinAgreeFormStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 24px;
  margin-bottom: 30px;
`;

export const JoinFormsValidStyled = styled.p`
  width: 100%;
  color: #ff0000;
  font-size: 12px;
  letter-spacing: -0.5px;
`;

export const JoinButtonWrapStyled = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  column-gap: 8px;
  align-items: center;
`;
