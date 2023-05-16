import * as Styled from "./intoduce.styled";
import { useNavigate } from "react-router-dom";
import Btn1 from "../../components/button/Btn1";

type selectedType = {
  [key: string]: string;
};

export default function Introduce() {
  const handleStory = (title: string) => {
    const selected: selectedType = {
      yes: "좋아!",
      no: "싫어!",
    };

    return selected[title];
  };

  const title1 =
    "비가 추적추적 내린다.\n 식물을 키우기 좋은 날 이군 식물 키우러 가볼까?";

  const navigate = useNavigate();

  const handleClick = (title: string) => () => {
    const selected: selectedType = {
      yes: "/story/selectPlantPage",
      no: "/story/introduceReturnPage",
    };
    return navigate(selected[title]);
  };

  return (
    <Styled.Layout>
      <Styled.Introduce_backgroundImg />
      <Styled.Introduce_DescDiv>
        <Styled.MainBtnDiv>
          <Styled.BtnDiv>
            <Btn1 title="메인 페이지로 가기"></Btn1>
          </Styled.BtnDiv>
        </Styled.MainBtnDiv>
        <Styled.DescDiv>
          <Styled.DescTitle>{title1}</Styled.DescTitle>
          <Styled.DescBtnDiv>
            <Btn1 title={handleStory("yes")} onClick={handleClick("yes")} />
          </Styled.DescBtnDiv>
          <Styled.DescBtnDiv>
            <Btn1 title={handleStory("no")} onClick={handleClick("no")} />
          </Styled.DescBtnDiv>
        </Styled.DescDiv>
      </Styled.Introduce_DescDiv>
    </Styled.Layout>
  );
}
