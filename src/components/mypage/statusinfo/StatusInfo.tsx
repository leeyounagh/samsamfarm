import { useState, Dispatch, SetStateAction } from "react";
import GuideBook from "../guidebook/GuideBook";
import * as Styled from "./status.styled";
import axios from "axios";

interface StatusType {
  setIsOpenStatus: Dispatch<SetStateAction<boolean>>;
  element: {
    bright: number;
    humid: string;
    id: number;
    moisture: string;
    temperature: string;
  };
  ClickedStatus: number;
}

function StatusInfo({ setIsOpenStatus, element, ClickedStatus }: StatusType) {
  const [isChangeBtn, setIsChangeBtn] = useState<boolean>(false);
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);
  const [status, setStatus] = useState(0);

  const handleSwitch = async () => {
    setIsChangeBtn(true);
    const body = {
      temperature: 11,
    };
    // const response = await axios.post(
    //   "http://34.64.51.215/samsamfarm/api/device/control",
    //   body
    // );
    // console.log(response);
  };

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
          {ClickedStatus === 0 ? (
            <h1>현재 온도</h1>
          ) : ClickedStatus === 1 ? (
            <h1>조도</h1>
          ) : ClickedStatus === 2 ? (
            <h1>습도</h1>
          ) : null}

          <Styled.StatusTextDiv>
            {ClickedStatus === 0 ? (
              <h3>{element.temperature}도</h3>
            ) : ClickedStatus === 1 ? (
              <h3>{element.bright}</h3>
            ) : ClickedStatus === 2 ? (
              <h3>{element.humid}</h3>
            ) : null}
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
          {isChangeBtn && <h2>fan이 돌아가고 있습니다.</h2>}
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
