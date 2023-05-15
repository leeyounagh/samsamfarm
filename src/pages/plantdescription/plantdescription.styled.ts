import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  font-family: "DOSPilgiMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/DOSPilgiMedium.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;

  @media (max-width: 768px) {
    height: 60vh;
  }
`;

export const FlowerDiv = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const DescForm = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const FlowerImg = styled.img``;

export const DescInnerDiv = styled.div`
  width: 60%;
  height: 50%;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const BtnDiv = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnLayout = styled.div`
  margin-right: 50px;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin-right: 20px;
  }

  @media (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;
