import styled from "styled-components";

export const Layout = styled.main`
  border: 1px solid black;
  width: 80vw;
  height: 60ch;
  display: flex;
  justify-content: center;
`;

export const SwiperDiv = styled.div`
  width: 90%;
  margin: auto;
  height: 500px;
  #infobox:nth-child(1n) {
    position: absolute;
    top: 31%;
    left: 13%;
  }
  #infobox:nth-child(2n) {
    position: absolute;
    top: 25%;
    left: 33%;
  }
  #infobox:nth-child(3n) {
    position: absolute;
    top: 35%;
    left: 53%;
  }
  #infobox:nth-child(4n) {
    position: absolute;
    top: 4%;
    left: 73%;
  }
`;

export const ListDiv = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 60vh;
`;

export const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  z-index: 10;
`;
export const character1Img = styled.img`
  z-index: 50;
  position: absolute;
  top: 55%;
  left: 10%;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
export const character2Img = styled.img`
  z-index: 50;
  position: absolute;
  top: 45%;
  left: 30%;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
export const character3Img = styled.img`
  z-index: 50;
  position: absolute;
  top: 55%;
  left: 50%;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
export const character4Img = styled.img`
  z-index: 50;
  position: absolute;
  top: 25%;
  left: 70%;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
export const InfoBox = styled.div`
  border: 1px solid lightgray;
  width: 180px;
  height: 120px;
  background-color: white;
  text-align: center;
`;
