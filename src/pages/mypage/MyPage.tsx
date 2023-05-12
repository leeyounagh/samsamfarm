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
                  <Styled.TextDiv>온도</Styled.TextDiv>
                  <img
                    src="./asset/스마일-removebg-preview (1).png"
                    width="80px"
                    height="80px"
                  />
                  {/* <h2>정상</h2> */}
                </Styled.StatusTextDiv>
                <Styled.StatusTextDiv>
                  <Styled.TextDiv>조도</Styled.TextDiv>
                  <img
                    src="./asset/위험-removebg-preview.png"
                    width="80px"
                    height="80px"
                  />
                  {/* <h2>위험</h2> */}
                </Styled.StatusTextDiv>
                <Styled.StatusTextDiv>
                  <Styled.TextDiv>습도</Styled.TextDiv>
                  <img
                    src="./asset/스마일-removebg-preview (1).png"
                    width="80px"
                    height="80px"
                  />
                  {/* <h2>정상</h2> */}
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
