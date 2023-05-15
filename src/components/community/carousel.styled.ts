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
  z-index: 100;
  #infobox:nth-child(1n) {
    position: absolute;
    top: 31%;
    left: 13%;
    @media screen and (max-width: 480px) {
      position: absolute;
      top: 21%;
      left: 15%;
    }
  }
  #infobox:nth-child(2n) {
    position: absolute;
    top: 25%;
    left: 33%;
    @media screen and (max-width: 480px) {
      position: absolute;
      top: 8%;
      left: 40%;
    }
  }
  #infobox:nth-child(3n) {
    position: absolute;
    top: 35%;
    left: 53%;
    @media screen and (max-width: 480px) {
      position: absolute;
      top: 26%;
      left: 65%;
    }
  }
  #infobox:nth-child(4n) {
    position: absolute;
    top: 4%;
    left: 73%;
  }
  @media screen and (max-width: 480px) {
    height: 40vh;
    width: 80%;
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
  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;
export const character2Img = styled.img`
  z-index: 50;
  position: absolute;
  top: 45%;
  left: 30%;
  width: 100px;
  height: 100px;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 35%;
    left: 35%;
  }
`;
export const character3Img = styled.img`
  z-index: 50;
  position: absolute;
  top: 55%;
  left: 50%;
  width: 100px;
  height: 100px;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 60%;
    left: 58%;
  }
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
  border-radius: 10px;
  width: 180px;
  height: 150px;
  background-color: white;
  text-align: center;
  opacity: 0.8;
  padding: 15px 0px 0px 15px;
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  h1 {
    font-size: 1.2rem;
    height: 1.5rem;
    padding-top: 10px;
  }
  h3 {
    font-size: 1rem;
    height: 1.5rem;
  }
  @media screen and (max-width: 1024px) {
    width: 120px;
    height: 120px;
    padding: 0px 0px 0px 0px;
    h1 {
      font-size: 1rem;
      height: 1rem;
      padding-top: 10px;
    }
    h3 {
      font-size: 0.8rem;
      height: 1rem;
    }
  }
  @media screen and (max-width: 480px) {
    width: 80px;
    height: 80px;
    h1 {
      font-size: 0.6rem;
      height: 1rem;
      padding-top: 10px;
    }
    h3 {
      font-size: 0.4rem;
      height: 1rem;
    }
  }
`;

export const BtnDiv = styled.div`
  @media screen and (max-width: 1024px) {
    height: 4rem;
    white-space: nowrap;
  }
`;
