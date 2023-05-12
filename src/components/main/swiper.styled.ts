import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 20vh;
  margin-top: 200px;
  @media (max-width: 1400px) {
    margin-top: 300px;
  }
  @media (max-width: 1024px) {
    margin-top: 500px;
  }
  @media (max-width: 768px) {
    margin-top: 100px;
  }
  @media (max-width: 480px) {
    margin-top: 50px;
  }
`;

export const ListDiv = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 180px;
  background: white;
  @media (max-width: 768px) {
    width: 200px;
    height: 180px;
  }
  @media (max-width: 480px) {
    width: 150px;
    height: 100px;
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
