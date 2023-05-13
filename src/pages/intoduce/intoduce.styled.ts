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
  display: flex;
  font-family: "DOSPilgiMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/DOSPilgiMedium.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
  p {
    display: flex;
    align-items: center;
    margin-left: 50px;
  }
`;

export const Introduce_span = styled.span`
  margin-left: 30%;
  margin-top: 5%;
`;

export const Introduce_buttonDiv = styled.div`
  font-size: 1.5em;
  width: 8rem;
  height: 6rem;
`;

export const GOBackMainDiv = styled.div`
  font-family: "DOSPilgiMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/DOSPilgiMedium.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
`;
