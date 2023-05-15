import { useState, Dispatch, SetStateAction, useEffect } from "react";
import GuideBook from "../guidebook/GuideBook";
import * as Styled from "./status.styled";
import { DataChart } from "../DataChart";
import AxiosInstance from "../../../api/AxiosIntance";
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
  const [currentStatus, setCurrentStatus] = useState<number>(0);
  console.log(currentStatus);
  useEffect(() => {
    if (ClickedStatus === 0) {
      setCurrentStatus(Number(element?.temperature));
    }
    if (ClickedStatus === 1) {
      setCurrentStatus(Number(element?.bright));
    }
    if (ClickedStatus === 2) {
      setCurrentStatus(Number(element?.humid));
    }
  }, []);

  const handleSwitch = async () => {
    setIsChangeBtn(true);
    if (currentStatus < -50) {
      return setIsChangeBtn(false);
    }
    setCurrentStatus((prev) => {
      return prev - 30;
    });
    try {
      const body = {
        device_id: 1,
        wind_command: true,
        water_command: false,
        light_command: false,
      };
      const response = await AxiosInstance.post("/device/control", body);
      const { data } = response.data;
      if (data === "success") {
        alert("수치가 내려가고 있습니다.");
      }

      console.log(data);
    } catch (err) {
      alert(err);
    }

    {
      ClickedStatus === 0 ? (
        <>
          <h1>현재 온도</h1>
          {currentStatus}
        </>
      ) : ClickedStatus === 1 ? (
        <>
          <h1>조도</h1>
          {currentStatus}
        </>
      ) : ClickedStatus === 2 ? (
        <>
          <h1>습도</h1>
          {currentStatus}
        </>
      ) : null;
    }
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
          <DataChart />
          {ClickedStatus === 0 ? (
            <>
              <h1>현재 온도</h1>
              {currentStatus}
            </>
          ) : ClickedStatus === 1 ? (
            <>
              <h1>조도</h1>
              {currentStatus}
            </>
          ) : ClickedStatus === 2 ? (
            <>
              <h1>습도</h1>
              {currentStatus}
            </>
          ) : null}

          <Styled.StatusTextDiv>{currentStatus}</Styled.StatusTextDiv>
        </Styled.StatusDiv>

        <Styled.ButtonDiv>
          {isChangeBtn === false ? (
            <Styled.ButtonImg
              src="./asset/off버튼.png"
              onClick={() => {
                setIsChangeBtn(!isChangeBtn);
                handleSwitch();
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
          {isChangeBtn ? (
            <h2>fan이 돌아가고 있습니다.</h2>
          ) : currentStatus < -50 ? (
            <h2>더이상 낮출수 없습니다. 돌아 가세요</h2>
          ) : null}
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
