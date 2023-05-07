import styled from "styled-components";

export const Layout = styled.main`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
`;

export const BackgroundDiv = styled.div`
  width: 80%;
  height: 100%;
  background-image: url("./asset/마이페이지배경.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const UILayout = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CharacterImg = styled.img`
  width: 300px;
  height: 300px;
`;
export const ConsoleDiv = styled.div`
  width: 60%;
  height: 60vh;
  display: flex;
  justify-content: center;
`;
export const ConsoleImg = styled.img`
  width: 50vw;
  height: 60vh;
  position: absolute;
  top: 20%;
  left: 33%;
  z-index: 10;
`;
export const IconDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const IconImg = styled.img`
  z-index: 50;
  width: 100px;
  height: 100px;
  margin-top: 30px;
`;
export const ConsoleInnerDiv = styled.div`
  width: 80%;
  height: 100%;
  background-image: url("./asset/게임기누끼2.png");
  background-size: 100% 100%;
`;
export const StatusDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StatusTextDiv = styled.div`
  h2 {
    margin-right: 10px;
    margin-bottom: 100px;
    font-size: 1rem;
  }
`;
export const CharacterDiv = styled.div`
  width: 30%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;

  button {
    width: 100%;
    height: 5vh;
  }
`;
