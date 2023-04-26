import React from "react";
import * as Styled from "./landing.styled";
import MainField from "../../components/main/MainField";
import MainSwiper from "../../components/main/MainSwiper";

export default function Landing() {
  return (
    <Styled.Layout>
      <Styled.TitleDiv>
        <Styled.Title>메인 타이틀 정해주세요!</Styled.Title>
      </Styled.TitleDiv>
      <MainField />
      <MainSwiper />
    </Styled.Layout>
  );
}
