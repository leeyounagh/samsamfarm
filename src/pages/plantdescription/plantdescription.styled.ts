import styled from "styled-components";

export const Layout = styled.div`
  border: 3px solid blue;
  width: 100%;
  height: 80vh;
  display: flex;
  font-family: "DOSPilgiMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/DOSPilgiMedium.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
`;
export const FlowerDiv = styled.div`
  border: 3px solid red;
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DescForm = styled.form`
  border: 3px solid yellow;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FlowerImg = styled.img``;
export const DescInnerDiv = styled.div`
  width: 60%;
  height: 50%;
`;
export const BtnDiv = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Btn = styled.button`
  margin-right: 50px;
`;
