import * as Styled from "./mypage.styled";
import UserInfo from "../../components/mypage/userinfo/UserInfo";
import StatusInfo from "../../components/mypage/statusinfo/StatusInfo";
import { useEffect, useState } from "react";
import Btn1 from "../../components/button/Btn1";
import MypageName from "../../data/mypageName";
import { decodeToken } from "react-jwt";
import NoticeDevice from "../../components/mypage/NoticeDevice";
import { setStatus } from "../../slice/CurrentStatusSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { withAuth } from "../../utils/withAuth";
interface plantMapperType {
  bright: number;
  humid: string;
  temperature: string;
  [key: string]: number | string;
}
function MyPage() {
  const [isOpenStatus, setIsOpenStatus] = useState<boolean>(false);
  const [isOpenUserInfo, setIsOpenUserInfo] = useState<boolean>(false);
  const [ClickedStatus, setClickedStatus] = useState<number>(0);
  const JwtToken: any = decodeToken(localStorage.JWtToken);
  const dispatch = useDispatch();
  const deviceData = useSelector((state: RootState) => {
    return state.data;
  });

  useEffect(() => {
    if (isOpenUserInfo || isOpenStatus) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpenUserInfo, isOpenStatus]);

  const handleStatus = (status: string, value: string | number) => {
    const mapper: plantMapperType = {
      bright: 30,
      humid: "80",
      temperature: "60",
      moisture: "20",
    };

    return Number(value) > Number(mapper[status]) ? (
      <Styled.StatusImg src="/asset/위험.png" />
    ) : (
      <Styled.StatusImg src="/asset/스마일3.png" />
    );
  };

  return (
    <Styled.Layout>
      <Styled.BackgroundDiv>
        {isOpenUserInfo && <UserInfo setIsOpenUserInfo={setIsOpenUserInfo} />}
        <Styled.UILayout>
          <Styled.CharacterDiv>
            <Styled.CharacterImg src="/asset/님피아.gif" />
            <Styled.MypageBtnDiv
              onClick={() => {
                setIsOpenUserInfo(true);
              }}
            >
              <Btn1 title="내정보" />
            </Styled.MypageBtnDiv>
          </Styled.CharacterDiv>

          <Styled.ConsoleDiv>
            {JwtToken?.device_id === 1 ? (
              <Styled.ConsoleInnerDiv>
                <Styled.IconLayout>
                  {MypageName.map((item) => {
                    return (
                      <>
                        <Styled.IconDiv>
                          <button
                            onClick={() => {
                              setIsOpenStatus(!isOpenStatus);
                              setClickedStatus(item.id);
                              dispatch(setStatus(item.id));
                            }}
                          >
                            {item.name}
                          </button>
                        </Styled.IconDiv>
                      </>
                    );
                  })}
                </Styled.IconLayout>
                <h3>status</h3>
                <Styled.StatusDiv>
                  {deviceData
                    ?.filter(
                      (_element: any, index: number) =>
                        index === deviceData.length - 1
                    )
                    .map((element: any) => (
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
                        <Styled.StatusTextDiv>
                          {handleStatus("temperature", element.temperature)}
                        </Styled.StatusTextDiv>
                      </>
                    ))}
                </Styled.StatusDiv>
              </Styled.ConsoleInnerDiv>
            ) : (
              <NoticeDevice />
            )}
          </Styled.ConsoleDiv>
        </Styled.UILayout>
      </Styled.BackgroundDiv>
    </Styled.Layout>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default withAuth(MyPage);
