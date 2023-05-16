import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 60%;
    height: 80%;
  }
`;

export const CellPhoneDiv = styled.div`
  width: 50rem;
  height: 25rem;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 80%;
  }
`;

export const CellphoneImg = styled.img`
  width: 60%;
  height: 100%;
`;

export const TextDiv = styled.div`
  width: 100%;
  height: 5rem;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
  }
`;

export const RegisterDiv = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
    white-space: nowrap;
  }
`;
export const BtnDiv = styled.div`
  width: 50%;
  height: 100%;
`;
