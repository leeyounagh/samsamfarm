import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 80vh;

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
  width: 50%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const OtherDiv = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const FlowerImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 10rem;
  }
`;

export const InfoText = styled.div``;

export const TextDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const LayoutInnerDiv = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  padding-top: 50px;

  @media (max-width: 768px) {
    /* flex-direction: column-reverse; */
    align-items: center;
    justify-content: center;
    padding-top: 20px;
  }
`;

export const OtherImg = styled.img`
  width: 80%;
  height: 90%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 65%;
    height: auto;
  }
`;
