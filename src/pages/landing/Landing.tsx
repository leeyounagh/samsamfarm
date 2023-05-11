import * as Styled from "./landing.styled";
import MainField from "../../components/main/MainField";
import MainSwiper from "../../components/main/MainSwiper";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function Landing() {
  const middleSize = useMediaQuery("(max-width: 1024px)");
  const mobileSize = useMediaQuery("(max-width: 768px)");
  return (
    <Styled.Layout>
      <Styled.TitleDiv>
        <Styled.Title>소환사의 농장에 오신것을 환영 합니다.</Styled.Title>
      </Styled.TitleDiv>

      <MainField />

      {middleSize ? (
        <MainSwiper />
      ) : mobileSize ? (
        <MainSwiper />
      ) : (
        <MainSwiper />
      )}
    </Styled.Layout>
  );
}
