import * as Styled from "./noticedevice.styled";
import Btn1 from "../button/Btn1";

export default function NoticeDevice() {
  return (
    <Styled.Layout>
      <Styled.CellPhoneDiv>
        <Styled.CellphoneImg src="/asset/핸드폰.gif" />
      </Styled.CellPhoneDiv>
      <Styled.TextDiv>
        <h1>디바이스를 등록해 주세요</h1>
      </Styled.TextDiv>
      <Styled.RegisterDiv>
        <Styled.BtnDiv>
          <Btn1
            title="등록하기"
            onClick={() => {
              alert("서비스 준비중 입니다.");
            }}
          />
        </Styled.BtnDiv>
      </Styled.RegisterDiv>
    </Styled.Layout>
  );
}
