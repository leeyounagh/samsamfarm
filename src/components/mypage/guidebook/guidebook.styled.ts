import styled from "styled-components";

export const Layout = styled.div`
  width: 40rem;
  height: 45rem;
  z-index: 500;
  position: absolute;
  left: 15%;
  background-image: url("/asset/지침서.gif");
  background-size: cover;
  display: grid;
  justify-content: center;
  @media screen and (max-width: 768px) {
    position: absolute;
    left: 5%;
  }
  @media screen and (max-width: 480px) {
    position: absolute;
    left: 0%;
    width: 23rem;
    height: 40rem;
  }
`;

export const CloseDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 480px) {
    width: 24.5rem;
    height: 4rem;
    padding-top: 10px;
  }
`;
export const CloseImg = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
  z-index: 550;
  @media screen and (max-width: 480px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const MemoDiv = styled.div`
  width: 40rem;
  height: 30rem;
  background-image: url("/asset/메모장1.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  text-align: center;
  h1 {
    margin-top: 50px;
  }
  @media screen and (max-width: 480px) {
    width: 25rem;
    height: 28rem;
    font-size: 0.8rem;
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

  @media screen and (max-width: 480px) {
    width: 25rem;
    height: 25rem;
  }
`;
