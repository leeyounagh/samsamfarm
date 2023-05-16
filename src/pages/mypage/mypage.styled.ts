import styled from "styled-components";

export const Layout = styled.main`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  @media (max-width: 480px) {
    width: 100%;
    height: 40rem;
  }
`;

export const BackgroundDiv = styled.div`
  width: 80%;
  height: 100%;
  background-image: url("./asset/마이페이지배경.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    width: 90%;
    height: 100%;
  }
  @media (max-width: 480px) {
    width: 80%;
    height: 30rem;
    align-items: flex-start;
  }
`;
export const UILayout = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    display: grid;
  }
`;
export const CharacterImg = styled.img`
  width: 300px;
  height: 300px;
  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 480px) {
    width: 5rem;
    height: 5rem;
  }
`;
export const ConsoleDiv = styled.div`
  width: 60%;
  height: 60vh;
  display: flex;
  justify-content: center;
  @media (max-width: 1024px) {
    width: 50%;
    height: 50vh;
  }
  @media (max-width: 480px) {
    width: 20rem;
    height: 15rem;
  }
`;
export const ConsoleImg = styled.img`
  width: 50vw;
  height: 60vh;
  position: absolute;
  top: 20%;
  left: 33%;
  z-index: 10;
`;
export const IconLayout = styled.div`
  width: 100%;
  height: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-top: 10%;

  @media (max-width: 1024px) {
    width: 15rem;
    height: 12rem;
  }
  @media (max-width: 480px) {
    width: 15rem;
    height: 5rem;
  }
`;
export const IconImg = styled.img`
  z-index: 50;
  width: 100%;
  height: 100px;
  margin-top: 30px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 1024px) {
    width: 3rem;
    height: 2.5rem;
  }
`;
export const ConsoleInnerDiv = styled.div`
  width: 80%;
  height: 100%;
  background-image: url("./asset/게임기누끼2.png");
  background-size: 100% 100%;
  display: grid;
  justify-content: center;
`;
export const StatusDiv = styled.div`
  width: 30rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 15rem;
    height: 10rem;
  }
  @media (max-width: 480px) {
    width: 15rem;
    height: 5rem;
  }
`;
export const StatusTextDiv = styled.div`
  h2 {
    margin-right: 10px;
    margin-bottom: 100px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 2rem;
    height: 3rem;
  }
`;
export const CharacterDiv = styled.div`
  width: 30%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    width: 30%;
    height: 60%;
  }
  @media (max-width: 480px) {
    width: 20rem;
    height: 10rem;
  }

  button {
    width: 100%;
    height: 5vh;
  }
`;
export const TextDiv = styled.div`
  text-align: center;
  font-size: 0.4rem;
  @media (max-width: 1024px) {
    font-size: 0.1rem;
  }
  @media (max-width: 480px) {
    font-size: 1px;
  }
`;

export const MypageBtnDiv = styled.div`
  @media (max-width: 480px) {
    width: 5rem;
    height: 5rem;
    white-space: nowrap;
  }
`;

export const StatusImg = styled.img`
  width: 5rem;
  height: 5rem;
  margin-right: 10px;
  @media (max-width: 1024px) {
    width: 2rem;
    height: 2rem;
  }
  @media (max-width: 480px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const IconDiv = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
