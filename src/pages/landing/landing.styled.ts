import styled from "styled-components";

export const Layout = styled.main`
  width: 100%;
  border: 1px solid black;
  height: 100vh;
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

export const Title = styled.h1`
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  height: 60%;
  width: 24ch;

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
