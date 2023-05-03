import * as Styled from "./landing.styled";
import MainField from "../../components/main/MainField";
import MainSwiper from "../../components/main/MainSwiper";

export default function Landing() {
  return (
    <Styled.Layout>
      <Styled.TitleDiv>
        <Styled.Title>소환사의 농장에 오신것을 환영 합니다.</Styled.Title>
      </Styled.TitleDiv>
      <MainField />
      <MainSwiper />
    </Styled.Layout>
  );
}
