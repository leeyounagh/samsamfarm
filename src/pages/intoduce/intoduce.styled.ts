import styled from "styled-components";
import street from "../../../public/asset/스타벅스.gif";

export const Layout = styled.div``;
export const Introduce_backgroundImg = styled.div`
  background-image: url(${street});
  background-size: 100% 100%;
  width: 100vw;
  height: 70vh;
  background-repeat: no-repeat;
`;

export const Introduce_Script = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  font-family: "DOSPilgiMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/DOSPilgiMedium.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
`;

export const Introduce_div = styled.div`
  margin-top: 5%;
  width: 80%;
  display: flex;
  justify-content: center;
  p {
    display: flex;
    justify-content: center;
  }
`;

export const Introduce_buttonDiv = styled.div`
  font-size: 1.5em;
  width: 8rem;
  height: 6rem;
  white-space: nowrap;
  padding-top: 10px;
`;

export const GOBackMainDiv = styled.div`
  font-family: "DOSPilgiMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/DOSPilgiMedium.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
  width: 20%;
  height: 10%;
`;

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
`;
