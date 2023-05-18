import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  padding: 23rem;
  background-image: url("/asset/꽃배정.gif");
  background-size: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    padding: 10rem;
  }
`;
export const TitleDiv = styled.div`
  display: grid;
  justify-content: center;
  h2 {
    animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    display: flex;
    align-items: center;
    height: 8vh;
    width: 17ch;
    font-weight: 100;
    font-size: 2.5rem;
    color: black;
    @media (max-width: 1024px) {
      height: 20%;
      font-size: 2.5rem;
      margin-top: 50px;
      margin-bottom: 50px;
    }
    @media (max-width: 768px) {
      height: 30%;
      font-size: 2rem;
    }
    @media (max-width: 468px) {
      height: 20%;
      font-size: 1.5rem;
      margin-left: 10px;
    }

    font-family: "bitbit";
    src: url("//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff"),
      url("//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff2");

    @keyframes typing {
      from {
        width: 0;
      }
    }

    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }
  }
`;
export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  font-size: 1rem;
  font-weight: 300;
`;
export const Btn = styled.button``;
