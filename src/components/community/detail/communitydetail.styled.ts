import styled from "styled-components";
import color from "../../../styles/color";

export const Layout = styled.section`
  width: 60vw;
  height: 90vh;
  z-index: 300;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-image: url("/asset/커뮤니티모달.gif");
  background-size: cover;
  display: grid;
  place-items: center;
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  @media screen and (max-width: 1024px) {
    width: 50rem;
    height: 52rem;
    left: 5%;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column; /* 요소들을 세로로 정렬하기 위해 column으로 설정 */
    align-items: center; /* 세로 방향 가운데 정렬 */
    justify-content: center;
    width: 30rem;
    height: 52rem;
  }
  @media screen and (max-width: 480px) {
    width: 22rem;
    height: 38rem;
    padding-top: 10px;
  }
`;
export const TitleTextDiv = styled.div`
  height: 3rem;
  @media screen and (max-width: 480px) {
    height: 1.5rem;
    h1 {
      font-size: 0.8rem;
    }
  }
`;
export const TitleDiv = styled.div`
  width: 40vw;
  height: 6rem;
  background-color: white;
  opacity: 0.6;
  text-align: center;
  margin-top: 20px;
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;

  border-radius: 20px;

  h3 {
    margin-top: 15px;
    font-size: 1.5rem;
    margin-left: 10px;
  }
  @media screen and (max-width: 1024px) {
    width: 40rem;
    height: 8rem;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    height: 6rem;
    font-size: 0.7rem;

    h3 {
      margin-top: 15px;
      font-size: 0.6rem;
      margin-left: 10px;
    }
  }
  @media screen and (max-width: 480px) {
    width: 80%;
    height: 3rem;
    font-size: 0.6rem;
    h3 {
      margin-top: 5px;
    }
  }
`;

export const CloseDiv = styled.div`
  position: absolute;
  top: 30px;
  left: 92%;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 30px;
    left: 85%;
  }
  @media screen and (max-width: 480px) {
    position: absolute;
    top: 10px;
    left: 90%;
  }
`;
export const DescDiv = styled.div`
  background-color: white;
  opacity: 0.6;
  width: 45vw;
  height: 10rem;
  text-align: center;
  padding-top: 30px;
  border-radius: 20px;
  @media screen and (max-width: 1024px) {
    width: 40rem;
    height: 30vh;
  }
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    width: 25rem;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 480px) {
    width: 20rem;
    height: 15rem;
  }
`;
export const CommentDiv = styled.div`
  width: 55vw;
  height: 15rem;
  opacity: 0.6;
  background-color: white;
  border-radius: 20px;
  @media screen and (max-width: 1024px) {
    width: 40rem;
    height: 15rem;
  }
  @media screen and (max-width: 768px) {
    width: 28rem;
    height: 15rem;
  }
  @media screen and (max-width: 480px) {
    width: 20rem;
    height: 10rem;
  }
`;
export const WriteCommentDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const Input = styled.input`
  width: 50vw;
  height: 5vh;
  padding-left: 20px;
  margin: 20px 0 0 10px;
  border-color: lightgray;
  outline-color: ${color.main};
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 20rem;
    height: 3rem;
  }
  @media screen and (max-width: 480px) {
    width: 12rem;
    height: 2rem;
  }
`;
export const BtnDiv = styled.div`
  width: 6vw;
  height: 3rem;
  margin-left: 10px;
  white-space: nowrap;
  @media screen and (max-width: 480px) {
    width: 5rem;
    height: 3rem;
    margin-top: 0px;
  }
`;

export const CommentAreaDiv = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 60%;
  overflow-y: auto;
  text-align: center;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 20%;
  }
`;
export const CommentListDiv = styled.div`
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
export const CommentInnerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${color.main};
  padding-bottom: 10px;
  .content {
    width: 80%;
    @media screen and (max-width: 480px) {
      width: 60%;
      height: 20%;
      font-size: 0.6rem;
    }
  }
  .writer {
    width: 20%;
    @media screen and (max-width: 480px) {
      width: 40%;
      height: 20%;
      font-size: 0.6rem;
    }
  }
`;
export const CloseImg = styled.img`
  width: 50px;
  height: 50px;
  @media screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;
