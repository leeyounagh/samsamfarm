import styled from "styled-components";

export const Layout = styled.div`
  border: 1px solid black;
  width: 60vw;
  height: 85vh;
  position: fixed;
  z-index: 50;
  background-image: url("./asset/status배경.gif");
`;
export const CloseDiv = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  color: white;
  cursor: pointer;
`;

export const CloseImg = styled.img``;
export const MainInfoDiv = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  margin-top: 50px;
  padding-left: 80px;
`;
export const StatusDiv = styled.div`
  opacity: 0.6;
  background-color: white;
  width: 50%;
  height: 100%;
  border-radius: 50px;

  h1 {
    text-align: center;
    margin-top: 30px;
  }
`;

export const StatusTextDiv = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    width: 50%;
    text-align: center;
    font-size: 1.5rem;
  }
  h2 {
    display: inline-block;
  }
`;
export const StatusInnerDiv = styled.div`
  border: 1px solid yellow;
  width: 60%;
  height: 100%;
  display: grid;
  justify-content: center;
`;
export const ButtonDiv = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const ButtonImg = styled.img`
  width: 200px;
  height: 100px;
`;

export const GuideBookDiv = styled.div`
  width: 100%;
  height: 20%;
  margin-top: 10px;
  padding-left: 20px;
  cursor: pointer;
`;

export const GuidBookImg = styled.img`
  width: 15%;
  height: 100%;
`;
