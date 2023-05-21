import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;

  display: grid;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 60%;
    height: 15rem;
  }
  @media screen and (max-width: 480px) {
    width: 60%;
  }
`;

export const CellPhoneDiv = styled.div`
  width: 50rem;
  height: 25rem;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 10rem;
  }
`;

export const CellphoneImg = styled.img`
  width: 60%;
  height: 100%;
  @media screen and (max-width: 480px) {
    width: 10rem;
    height: 10rem;
  }
`;

export const TextDiv = styled.div`
  width: 100%;
  height: 5rem;
  text-align: center;
  display: grid;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

export const RegisterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 3px solid red;
  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
    white-space: nowrap;
  }
`;
export const BtnDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 1.2rem;
  }
`;
