import styled from "styled-components";

export const Layout = styled.div`
  z-index: 100;
  width: 60vw;
  height: 85vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-image: url("/asset/유저정보배경.gif");
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;

  @media (max-width: 480px) {
    width: 20rem;
    height: 40rem;
  }
`;
export const CloseBtn = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 768px) {
    align-items: center;
  }
  @media (max-width: 480px) {
    align-items: center;
  }
`;
export const CloseImg = styled.img`
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;
export const UserProfileDiv = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const userInfoDiv = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
`;
export const userInfoBox = styled.div`
  width: 60%;
  height: 100%;
  background-color: white;
  opacity: 0.6;
  border-radius: 20px;
  @media (max-width: 1024px) {
    height: 20rem;
  }
`;
export const InfoText = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`;
