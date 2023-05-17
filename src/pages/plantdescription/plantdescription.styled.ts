import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  padding: 10rem;

  /* height: 80vh; */
  display: flex;
  justify-content: center;
  font-family: "DOSPilgiMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/DOSPilgiMedium.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;

  @media (max-width: 768px) {
    height: 75vh;
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
`;

export const DescForm = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const FlowerImg = styled.img`
  @media (max-width: 768px) {
    width: 100%;
    height: 40%;
  }
`;

export const DescInnerDiv = styled.div`
  width: 60%;
  height: 50%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
export const StoryText = styled.h2`
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
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
`;
