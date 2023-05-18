import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;

  height: 90vh;

  font-family: "NeoDunggeunmoPro-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/NeoDunggeunmoPro-Regular.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
  @media (max-width: 480px) {
    height: 85vh;
  }
`;

export const Introduce_backgroundImg = styled.div`
  background-image: url("/asset/스타벅스.gif");
  background-size: 100% 100%;
  width: 100vw;
  height: 70vh;
  background-repeat: no-repeat;
`;
export const Introduce_DescDiv = styled.div`
  width: 100%;
  height: 15rem;
`;
export const MainBtnDiv = styled.div`
  height: 3rem;
`;
export const BtnDiv = styled.div`
  width: 15rem;
  white-space: nowrap;
`;
export const DescDiv = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
`;

export const DescTitle = styled.div`
  width: 70%;
  height: 8rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    width: 60%;
    height: 20%;
  }
`;
export const DescBtnDiv = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-right: 10px;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    width: 20%;
    height: 20%;
    margin-left: 10px;
  }
`;
