import styled from "styled-components";
import color from "../../styles/color";

export const Layout = styled.main`
  width: 100%;
  background-color: white;
  margin-bottom: 100px;
  @media (max-width: 480px) {
    height: 50rem;
  }
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  padding-top: 10px;
  @media (max-width: 1024px) {
    width: 100%;
    height: 8rem;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: 4rem;
  }
`;

export const Title = styled.h1`
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  display: flex;
  align-items: center;
  height: 8vh;
  width: 24ch;
  font-weight: 500;
  font-size: 2.5rem;
  color: ${color.main};
  @media (max-width: 1024px) {
    height: 6vh;
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    width: 23ch;
    height: 30%;
    font-size: 2rem;
  }
  @media (max-width: 468px) {
    font-size: 1.3rem;
    width: 23ch;
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
`;
