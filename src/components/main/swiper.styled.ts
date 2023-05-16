import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: 20vh;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;

  @media (max-width: 768px) {
    margin-top: 100px;
  }
  @media (max-width: 480px) {
    margin-top: 0px;
  }
`;

export const ListDiv = styled.div`
  border: 1px solid lightgray;
  width: 300px;
  height: 180px;
  background: white;

  cursor: pointer;
  @media (max-width: 1024px) {
    width: 200px;
    height: 180px;
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 180px;
  }
  @media (max-width: 480px) {
    width: 150px;
    height: 100px;
    margin-bottom: 50px;
    font-size: 0.8rem;
  }
`;

export const ListImg = styled.img`
  width: 100%;
  height: 70%;
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerLayout = styled.div`
  width: 100%;
  padding: auto;
  padding-left: 150px;
  margin: auto;
  @media (max-width: 1024px) {
    margin-bottom: 30px;
    padding-left: 0px;
  }
  @media (max-width: 480px) {
    padding-left: 0px;
    .list-style {
      margin-left: 30px;
    }
  }
`;
export const CommunityInnerDiv = styled.div`
  width: 60%;
  background-color: blue;
`;
