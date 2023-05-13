import { useNavigate } from "react-router-dom";
import * as Styled from "./introduce.returnstyled";

export default function IntroduceReturnPage() {
  const navigate = useNavigate();
  return (
    <div style={{ height: "70vh" }}>
      <Styled.IntroduceReturnPage_div>
        <img src="/public/asset/게임오버.gif" />
      </Styled.IntroduceReturnPage_div>
      <Styled.IntroduceReturnPage_div>
        <Styled.IntroduceReturnPage_p>
          싫다구?,, 거짓말
        </Styled.IntroduceReturnPage_p>
      </Styled.IntroduceReturnPage_div>
      <Styled.IntroduceReturnPage_div>
        <Styled.Introduce_button
          onClick={() => {
            navigate("/story/introduce");
          }}
        >
          Replay
        </Styled.Introduce_button>
      </Styled.IntroduceReturnPage_div>
    </div>
  );
}
