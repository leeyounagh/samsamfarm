import { useState, Dispatch, SetStateAction } from "react";
import GuideBook from "../guidebook/GuideBook";
import * as Styled from "./status.styled";

interface StatusType {
  setIsOpenStatus: Dispatch<SetStateAction<boolean>>;
}

function StatusInfo({ setIsOpenStatus }: StatusType) {
  const [isChangeBtn, setIsChangeBtn] = useState<boolean>(false);
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);

  return (
    <Styled.Layout>
      {isGuideOpen ? <GuideBook setIsGuideOpen={setIsGuideOpen} /> : null}

      <Styled.CloseDiv
        onClick={() => {
          setIsOpenStatus(false);
        }}
      >
        <Styled.CloseImg src="./asset/closebtn.png" />
      </Styled.CloseDiv>

      <Styled.MainInfoDiv>
        <Styled.StatusDiv>
          <h1>현재 온도</h1>
          <Styled.StatusTextDiv>
            <h3>36.5도</h3>
          </Styled.StatusTextDiv>
        </Styled.StatusDiv>

        <Styled.ButtonDiv>
          {isChangeBtn === false ? (
            <Styled.ButtonImg
              src="./asset/off버튼.png"
              onClick={() => {
                setIsChangeBtn(!isChangeBtn);
              }}
            />
          ) : (
            <Styled.ButtonImg
              src="./asset/on버튼.png"
              onClick={() => {
                setIsChangeBtn(!isChangeBtn);
              }}
            />
          )}
        </Styled.ButtonDiv>
      </Styled.MainInfoDiv>
      <Styled.GuideBookDiv
        onClick={() => {
          setIsGuideOpen(true);
        }}
      >
        <Styled.GuidBookImg src="./asset/책아이콘1.png" />
      </Styled.GuideBookDiv>
    </Styled.Layout>
  );
}

export default StatusInfo;
