import styled from "styled-components";

export const Layout = styled.main`
  width: 100%;
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  @media (max-width: 1024px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: 7rem;
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
