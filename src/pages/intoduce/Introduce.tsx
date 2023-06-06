import * as Styled from "./intoduce.styled";
import { useNavigate } from "react-router-dom";
import Btn1 from "../../components/button/Btn1";
import { withAuth } from "../../utils/withAuth";

type selectedType = {
  [key: string]: string;
};

function Introduce() {
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
  // 클릭이 안됐을때 자동호출 되서 yes만 받고 void를 반환한 상태에서 클릭 이벤트가 발생하면 내부함수가 다시
  //호출
  // 호출이 끝난 title 변수를 참조할수 있는이유는 자바스크립트의 클로저의 개념이 있기때문에!

  return (
    <Styled.Layout>
      <Styled.Introduce_backgroundImg />
      <Styled.Introduce_DescDiv>
        <Styled.MainBtnDiv>
          <Styled.BtnDiv>
            <Btn1
              onClick={() => {
                navigate("/main");
              }}
              title="메인 페이지로 가기"
            ></Btn1>
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

// eslint-disable-next-line react-refresh/only-export-components
export default withAuth(Introduce);
