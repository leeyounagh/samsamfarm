import * as Styled from "./intoduce.styled";
import { useNavigate } from "react-router-dom";
import Btn1 from "../../components/button/Btn1";

export default function Introduce() {
  const title1 =
    "비가 추적추적 내린다.\n 식물을 키우기 좋은 날 이군 식물 키우러 가볼까?";
  const yes = "좋아!";
  const no = "싫어";
  const navigate = useNavigate();
  const yesClickHandler = () => {
    navigate(`/story/selectPlantPage`);
  };
  const noClickHandler = () => {
    navigate(`/story/introduceReturnPage`);
  };

  return (
    <Styled.Layout>
      <Styled.Introduce_backgroundImg />
      <Styled.GOBackMainDiv
        onClick={() => {
          navigate("/");
        }}
      >
        <Btn1 title="메인 페이지로 가기"></Btn1>
      </Styled.GOBackMainDiv>

      <Styled.Introduce_Script>
        <p style={{ fontSize: "1.8rem" }}>{title1}</p>
        <Styled.Introduce_span>
          <Styled.Introduce_buttonDiv onClick={yesClickHandler}>
            <Btn1 title={yes}></Btn1>
          </Styled.Introduce_buttonDiv>
          <Styled.Introduce_buttonDiv onClick={() => noClickHandler()}>
            <Btn1 title={no}></Btn1>
          </Styled.Introduce_buttonDiv>
        </Styled.Introduce_span>
      </Styled.Introduce_Script>
    </Styled.Layout>
  );
}
