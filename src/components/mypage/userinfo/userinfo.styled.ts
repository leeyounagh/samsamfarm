import styled from "styled-components";

export const Layout = styled.div`
  z-index: 100;
  width: 60vw;
  height: 85vh;
  position: fixed;
  background-image: url("./asset/유저정보배경.gif");
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
`;
export const CloseBtn = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
`;
export const CloseImg = styled.img`
  cursor: pointer;
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
`;
export const InfoText = styled.div`
  width: 100%;
  height: 30%;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;
