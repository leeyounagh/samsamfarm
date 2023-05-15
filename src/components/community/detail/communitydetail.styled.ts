import styled from "styled-components";

export const Layout = styled.section`
  width: 60vw;
  height: 50rem;
  z-index: 300;
  background-color: black;
  position: fixed;
  top: 10%;
  left: 20%;
  background-image: url("./asset/커뮤니티모달.gif");
  background-size: cover;
  display: grid;
  place-items: center;
`;

export const TitleDiv = styled.div`
  width: 80%;
  height: 10vh;
  background-color: white;
  border: 3px solid blue;
  opacity: 0.6;
  text-align: center;
  padding-top: 30px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  h3 {
    margin-top: 15px;
    font-size: 1.5rem;
    margin-left: 10px;
  }
`;

export const CloseDiv = styled.div`
  position: absolute;
  top: 30px;
  left: 92%;
  cursor: pointer;
`;
export const DescDiv = styled.div`
  background-color: white;
  opacity: 0.6;
  width: 80%;
  height: 20vh;
  text-align: center;
  padding-top: 30px;
`;
export const CommentDiv = styled.div`
  width: 80%;
  height: 25vh;
  opacity: 0.6;
  background-color: white;
`;
export const WriteCommentDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const Input = styled.input`
  width: 85%;
  height: 5vh;
  padding-left: 20px;
  margin: 20px 0 0 20px;
`;
export const Btn = styled.button`
  width: 60px;
  height: 50px;
  margin: 20px 0 0 20px;
`;

export const CommentAreaDiv = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 60%;
  overflow-y: auto;
  text-align: center;
`;
export const CommentListDiv = styled.div`
  margin-top: 10px;
`;
export const CommentInnerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .content {
    width: 80%;
  }
  .writer {
    width: 20%;
  }
`;
