import * as Styled from "./mypage.styled";
import UserInfo from "../../components/mypage/userinfo/UserInfo";
import StatusInfo from "../../components/mypage/statusinfo/StatusInfo";
import { useEffect, useState } from "react";
import Btn1 from "../../components/button/Btn1";
import axios from "axios";
import MypageImg from "../../data/mypageImg";
import AxiosInstance from "../../api/AxiosIntance";
import { decodeToken } from "react-jwt";
import { UserType } from "../../types";
import NoticeDevice from "../../components/mypage/NoticeDevice";

interface plantType {
  bright: number;
  humid: string;
  id: number;
  moisture: string;
  temperature: string;
}

interface plantMapperType {
  bright: number;
  humid: string;
  temperature: string;
  [key: string]: number | string;
}
export default function MyPage() {
  const [isOpenStatus, setIsOpenStatus] = useState<boolean>(false);
  const [isOpenUserInfo, setIsOpenUserInfo] = useState<boolean>(false);
  const [getPlantData, setPlantData] = useState<plantType[]>([]);
  const [ClickedStatus, setClickedStatus] = useState<number>(0);
  const JwtToken: any = decodeToken(localStorage.JWtToken);

  useEffect(() => {
    const handleDevice = async () => {
      const response = await AxiosInstance.get(`/device/plant-data/1`);
      const data = response.data.data;
      const newItems = [data, ...getPlantData];
      setPlantData(newItems);
    };
    handleDevice();
  }, []);

  const handleStatus = (status: string, value: string | number) => {
    const mapper: plantMapperType = {
      bright: 30,
      humid: "80",
      temperature: "60",
    };

    return Number(value) > Number(mapper[status]) ? (
      <>
        <Styled.TextDiv>{status}</Styled.TextDiv>
        <Styled.StatusImg src="./asset/위험.png" />
      </>
    ) : (
      <>
        <Styled.TextDiv>{status}</Styled.TextDiv>
        <Styled.StatusImg src="./asset/스마일2.png" />
      </>
    );
  };
  console.log(
    getPlantData?.filter((_element, index) => {
      return index === getPlantData.length - 1;
    })
  );
  return (
    <Styled.Layout>
      <Styled.BackgroundDiv>
        <Styled.UILayout>
          <Styled.CharacterDiv>
            <Styled.CharacterImg src="./asset/님피아.gif" />
            <Styled.MypageBtnDiv
              onClick={() => {
                setIsOpenUserInfo(true);
              }}
            >
              <Btn1 title="내정보" />
            </Styled.MypageBtnDiv>
          </Styled.CharacterDiv>

          <Styled.ConsoleDiv>
            {JwtToken?.deivce_id == null ? (
              <NoticeDevice />
            ) : (
              <Styled.ConsoleInnerDiv>
                <Styled.IconLayout>
                  {MypageImg.map((item) => {
                    return (
                      <>
                        <Styled.IconDiv>
                          <Styled.IconImg
                            src={item.img}
                            onClick={() => {
                              setIsOpenStatus(!isOpenStatus);
                              setClickedStatus(item.id);
                            }}
                          />
                        </Styled.IconDiv>
                      </>
                    );
                  })}
                </Styled.IconLayout>

                <Styled.StatusDiv>
                  {getPlantData
                    ?.filter((_element, index) => index === 0)
                    .map((element) => (
                      <>
                        {isOpenStatus && (
                          <StatusInfo
                            element={element}
                            setIsOpenStatus={setIsOpenStatus}
                            ClickedStatus={ClickedStatus}
                          />
                        )}
                        <Styled.StatusTextDiv>
                          {handleStatus("bright", element.bright)}
                        </Styled.StatusTextDiv>
                        <Styled.StatusTextDiv>
                          {handleStatus("humid", element.humid)}
                        </Styled.StatusTextDiv>
                        <Styled.StatusTextDiv>
                          {handleStatus("temperature", element.temperature)}
                        </Styled.StatusTextDiv>
                      </>
                    ))}
                </Styled.StatusDiv>
              </Styled.ConsoleInnerDiv>
            )}
          </Styled.ConsoleDiv>
        </Styled.UILayout>
      </Styled.BackgroundDiv>
      {isOpenUserInfo && <UserInfo setIsOpenUserInfo={setIsOpenUserInfo} />}
    </Styled.Layout>
  );
}
