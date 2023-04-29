import styled from "styled-components";

export const Layout = styled.main`
  width: 100%;
  z-index: 10;
  height: 60%;
  position: relative;
`;

export const BackGroundImg = styled.img`
  width: 60%;
  height: 100%;
  position: absolute;
  left: 20%;
  z-index: 10;
`;

export const FieldLayOut = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;

  #item:nth-child(1n) {
    position: absolute;
    top: 20%;
    left: 27%;
  }
  #item:nth-child(2n) {
    position: absolute;
    top: 20%;
    left: 38%;
  }
  #item:nth-child(3n) {
    position: absolute;
    top: 55%;
    left: 27%;
  }
  #item:nth-child(4n) {
    position: absolute;
    top: 55%;
    left: 38%;
  }
  #item:nth-child(5n) {
    position: absolute;
    top: 20%;
    left: 57%;
  }
  #item:nth-child(6n) {
    position: absolute;
    top: 20%;
    left: 68%;
  }
  #item:nth-child(7n) {
    position: absolute;
    top: 55%;
    left: 68%;
  }
  #item:nth-child(8n) {
    position: absolute;
    top: 55%;
    left: 57%;
  }
`;

export const FieldDiv = styled.div`
  width: 6%;
  z-index: 10;
  height: 100px;
  background-image: url("./asset/밭누끼.png");
  background-size: cover;
`;

export const CharacterImg = styled.img``;

export const MainPlantImg = styled.img`
  width: 100px;
  height: 100px;
`;

export const TitleDiv = styled.div`
  height: 20vh;

  button {
    position: absolute;
    top: 100px;
    left: 10px;
    width: 90%;
    height: 50%;
  }
`;

export const MainPlantLayout = styled.div`
  width: 100%;
  height: 100%;
  #plants:nth-child(1n) {
    position: absolute;
    top: 20%;
    left: 29%;
    z-index: 100;
  }
  #plants:nth-child(2n) {
    position: absolute;
    top: 20%;
    left: 40%;
    z-index: 100;
  }
  #plants:nth-child(3n) {
    position: absolute;
    top: 55%;
    left: 29%;
    z-index: 100;
  }
  #plants:nth-child(4n) {
    position: absolute;
    top: 55%;
    left: 40%;
    z-index: 100;
  }
  #plants:nth-child(5n) {
    position: absolute;
    top: 20%;
    left: 59%;
    z-index: 100;
  }
  #plants:nth-child(6n) {
    position: absolute;
    top: 20%;
    left: 70%;
    z-index: 100;
  }
  #plants:nth-child(7n) {
    position: absolute;
    top: 55%;
    left: 70%;
    z-index: 100;
  }
  #plants:nth-child(8n) {
    position: absolute;
    top: 55%;
    left: 59%;
    z-index: 100;
  }
`;
