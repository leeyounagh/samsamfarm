import * as Styled from "./mypage.styled";
import UserInfo from "../../components/mypage/userinfo/UserInfo";
import StatusInfo from "../../components/mypage/statusinfo/StatusInfo";
import { useState } from "react";

export default function MyPage() {
  const [isOpenStatus, setIsOpenStatus] = useState<boolean>(false);
  const [isOpenUserInfo, setIsOpenUserInfo] = useState<boolean>(false);
  return (
    <Styled.Layout>
      <Styled.BackgroundDiv>
        <Styled.UILayout>
          <Styled.CharacterDiv>
            <Styled.CharacterImg src="./asset/님피아.gif" />
            <button
              onClick={() => {
                setIsOpenUserInfo(true);
              }}
            >
              내정보
            </button>
          </Styled.CharacterDiv>

          <Styled.ConsoleDiv>
            <Styled.ConsoleInnerDiv>
              <Styled.IconDiv>
                <Styled.IconImg
                  src="./asset/temperature.png"
                  onClick={() => {
                    setIsOpenStatus(true);
                  }}
                />
                <Styled.IconImg
                  src="./asset/전구.png"
                  onClick={() => {
                    setIsOpenStatus(true);
                  }}
                />
                <Styled.IconImg
                  src="./asset/습도1.png"
                  onClick={() => {
                    setIsOpenStatus(true);
                  }}
                />
              </Styled.IconDiv>
              <Styled.StatusDiv>
                <Styled.StatusTextDiv>
                  <h2>온도: 정상</h2>
                </Styled.StatusTextDiv>
                <Styled.StatusTextDiv>
                  <h2>조도: 위험</h2>
                </Styled.StatusTextDiv>
                <Styled.StatusTextDiv>
                  <h2>습도: 정상</h2>
                </Styled.StatusTextDiv>
              </Styled.StatusDiv>
            </Styled.ConsoleInnerDiv>
          </Styled.ConsoleDiv>
        </Styled.UILayout>
      </Styled.BackgroundDiv>
      {isOpenUserInfo ? (
        <UserInfo setIsOpenUserInfo={setIsOpenUserInfo} />
      ) : null}

      {isOpenStatus ? <StatusInfo setIsOpenStatus={setIsOpenStatus} /> : null}
    </Styled.Layout>
  );
}
