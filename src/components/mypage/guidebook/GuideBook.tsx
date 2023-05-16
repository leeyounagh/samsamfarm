import { Dispatch, SetStateAction } from "react";
import * as Styled from "./guidebook.styled";

interface GuideBookType {
  setIsGuideOpen: Dispatch<SetStateAction<boolean>>;
}

function GuideBook({ setIsGuideOpen }: GuideBookType) {
  return (
    <Styled.Layout>
      <Styled.CloseDiv>
        <Styled.CloseImg
          src="/asset/closebtn.png"
          onClick={() => {
            setIsGuideOpen(false);
          }}
        />
      </Styled.CloseDiv>

      <Styled.MemoDiv>
        <Styled.TextDiv>
          <h1>방울토마토 지침서</h1>
          <h3> 발아 최적온도: 28도</h3>
          <h3> 발아 일수: 5~7일</h3>
          <h3> 토마토 파종은 주로 10cm 모종포트 이용</h3>
          <h3> 물은 날씨와 흙의 상태를 보면서 주면 됨</h3>
        </Styled.TextDiv>
      </Styled.MemoDiv>
    </Styled.Layout>
  );
}

export default GuideBook;
