import styled from "styled-components";

export const Layout = styled.div`
  width: 40vw;
  height: 100%;
  z-index: 500;
  position: absolute;
  left: 15%;
  background-image: url("./asset/지침서.gif");
  background-size: cover;
  display: grid;
  justify-content: center;
`;

export const CloseDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const CloseImg = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
  z-index: 550;
`;

export const MemoDiv = styled.div`
  width: 40vw;
  height: 65vh;
  background-image: url("./asset/메모장1.png");
  background-size: cover;
  object-position: center center;
  text-align: center;
  h1 {
    margin-top: 50px;
  }
`;

export const MemoImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const TextDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-rows: 4fr 0.7fr 1fr 1fr 1fr 1fr;
`;
