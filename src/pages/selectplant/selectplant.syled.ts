import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 80vh;

  font-family: "DOSPilgiMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/DOSPilgiMedium.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
`;

export const FlowerDiv = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  justify-content: center;
`;
export const OtherDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const FlowerImg = styled.img`
  width: 30rem;
  height: 30rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
export const InfoText = styled.div``;

export const TextDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LayoutInnerDiv = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  padding-top: 50px;
`;

export const OtherImg = styled.img`
  width: 80%;
  height: 90%;
  &:hover {
    transition: transform 0.3s ease;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
