import styled from "styled-components";
import color from "../../../styles/color";

export const Layout = styled.div`
  width: 70rem;
  height: 40rem;
  position: fixed;
  top: 13%;
  left: 22%;
  z-index: 50;
  background-image: url("/asset/status배경.gif");
  padding-bottom: 50px;
  @media screen and (max-width: 1024px) {
    width: 60rem;
    height: 85vh;
    position: fixed;
    top: 10%;
    left: 2%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 85vh;
  }
  @media screen and (max-width: 480px) {
    width: 40rem;
  }
`;
export const CloseDiv = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    width: 3rem;
    height: 5rem;
  }
`;

export const CloseImg = styled.img`
  width: 4rem;
  height: 4rem;
  @media (max-width: 1024px) {
    width: 3rem;
    height: 3rem;
  }
`;
export const MainInfoDiv = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  margin-top: 50px;
  padding-left: 80px;

  @media screen and (max-width: 480px) {
    padding-left: 0px;
    width: 100%;
    height: 20rem;
    display: grid;
    align-items: center;
  }
`;
export const StatusDiv = styled.div`
  opacity: 0.9;
  background-color: white;
  width: 50%;
  height: 24rem;
  border-radius: 50px;
  text-align: center;

  h1 {
    font-size: 1rem;
    text-align: center;
    margin-top: 30px;
  }
  @media screen and (max-width: 480px) {
    width: 15rem;
    height: 15rem;
    margin-left: 40px;
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

  h2 {
    color: ${color.main};
  }

  @media screen and (max-width: 1024px) {
    width: 18rem;
    height: 20rem;
    display: grid;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    width: 15rem;
    height: 15rem;

    h2 {
      font-size: 0.8rem;
      text-align: center;
    }
  }
  @media screen and (max-width: 480px) {
    width: 23rem;
    height: 5rem;

    h2 {
      font-size: 0.8rem;
      text-align: center;
    }
  }
`;
export const ButtonImg = styled.img`
  width: 10rem;
  height: 5rem;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 7rem;
  }
  @media screen and (max-width: 480px) {
    width: 7rem;
    height: 5rem;
  }
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
