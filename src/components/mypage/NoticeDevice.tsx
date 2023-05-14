import * as Styled from "./noticedevice.styled";
import Btn1 from "../button/Btn1";
// import AxiosInstance from "../../api/AxiosIntance";

export default function NoticeDevice() {
  //   const registerDevice = async () => {
  //     try {
  //       const response = await AxiosInstance.post("/device", {
  //         id: 1,
  //       });
  //       console.log(response);
  //     } catch (err) {
  //       alert(err);
  //     }
  //   };
  return (
    <Styled.Layout>
      <Styled.CellPhoneDiv>
        <Styled.CellphoneImg src="./asset/핸드폰.gif" />
      </Styled.CellPhoneDiv>
      <Styled.TextDiv>
        <h1>디바이스를 등록해 주세요</h1>
      </Styled.TextDiv>
      <Styled.RegisterDiv>
        <Styled.BtnDiv
          onClick={() => {
            alert("서비스 준비중 입니다.");
          }}
        >
          <Btn1 title="등록하기" />
        </Styled.BtnDiv>
      </Styled.RegisterDiv>
    </Styled.Layout>
  );
}
