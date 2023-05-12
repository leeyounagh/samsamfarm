import * as Styled from "./intoduce..styled";
import { useNavigate } from "react-router-dom";

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
    <div>
      <Styled.Introduce_backgroundImg />
      <Styled.Introduce_Script>
        <p style={{ fontSize: "1.8rem" }}>{title1}</p>
        <Styled.Introduce_span>
          <Styled.Introduce_button onClick={yesClickHandler}>
            {yes}
          </Styled.Introduce_button>
          <Styled.Introduce_button onClick={noClickHandler}>
            {no}
          </Styled.Introduce_button>
        </Styled.Introduce_span>
      </Styled.Introduce_Script>
    </div>
  );
}
