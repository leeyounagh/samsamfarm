import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  padding: 10rem;
  display: flex;
  justify-content: center;
  font-family: "DOSPilgiMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/DOSPilgiMedium.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
  @media (max-width: 1024px) {
    padding: 1rem;
  }
  @media (max-width: 480px) {
    padding: 3rem;
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

export const FlowerDiv = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 15rem;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 480px) {
    width: 60%;
    height: 60%;
    display: flex;
    margin-left: 80px;
    margin-right: 100px;
  }
`;

export const DescForm = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 30rem;
  }
  @media (max-width: 768px) {
    width: 25rem;
  }
  @media (max-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const FlowerImg = styled.img`
  @media (max-width: 1024px) {
    width: 20rem;
    height: 40%;
  }
  @media (max-width: 768px) {
    width: 15rem;
    height: 40%;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: 5rem;
  }
`;

export const DescInnerDiv = styled.div`
  width: 60%;
  height: 50%;

  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
export const StoryText = styled.h2`
  font-size: 1.3rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const BtnDiv = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    padding-left: 50px;
  }
`;

export const BtnLayout = styled.div`
  margin-right: 50px;
  white-space: nowrap;
  @media (max-width: 1024px) {
    width: 20rem;
  }
  @media (max-width: 768px) {
    width: 25rem;
  }
`;
