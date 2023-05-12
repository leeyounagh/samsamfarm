import { Dispatch, SetStateAction } from "react";
import * as Styled from "./userinfo.styled";
import React from "react"; // React import 추가

interface userInfoType {
  setIsOpenUserInfo: Dispatch<SetStateAction<boolean>>;
}

export default function UserInfo({ setIsOpenUserInfo }: userInfoType) {
  return (
    <Styled.Layout>
      <Styled.CloseBtn>
        <Styled.CloseImg
          src="./asset/closebtn.png"
          onClick={() => {
            setIsOpenUserInfo(false);
          }}
        />
      </Styled.CloseBtn>
      <Styled.UserProfileDiv>
        <Styled.ProfileImg src="./asset/잠만보.png" />
      </Styled.UserProfileDiv>
      <Styled.userInfoDiv>
        <Styled.userInfoBox>
          <Styled.InfoText>
            <h2>루카스님</h2>
          </Styled.InfoText>
          <Styled.InfoText>
            <h3>Email: adsfasdf@naver.com</h3>
          </Styled.InfoText>
          <Styled.InfoText>
            <h3>Mbti: INTP</h3>
          </Styled.InfoText>
        </Styled.userInfoBox>
      </Styled.userInfoDiv>
    </Styled.Layout>
  );
}
