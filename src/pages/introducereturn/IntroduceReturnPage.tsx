import { useNavigate } from "react-router-dom";
import * as Styled from "./introduce.returnstyled";
import Btn1 from "../../components/button/Btn1";

export default function IntroduceReturnPage() {
  const navigate = useNavigate();

  return (
    <Styled.Layout style={{ height: "70vh" }}>
      <Styled.IntroduceReturnPage_div>
        <Styled.Image src="/asset/게임오버.gif" />
      </Styled.IntroduceReturnPage_div>
      <Styled.IntroduceReturnPage_div>
        <Styled.IntroduceReturnPage_p>
          싫다구?,, 거짓말
        </Styled.IntroduceReturnPage_p>
      </Styled.IntroduceReturnPage_div>
      <Styled.IntroduceReturnPage_div>
        <Styled.Introduce_button_div
          onClick={() => {
            navigate("/story/introduce");
          }}
        >
          <Btn1 title="ReTry" />
        </Styled.Introduce_button_div>
      </Styled.IntroduceReturnPage_div>
    </Styled.Layout>
  );
}
