import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as Styled from "./userinfo.styled";
import AxiosInstance from "../../../api/AxiosIntance";
interface userInfoType {
  setIsOpenUserInfo: Dispatch<SetStateAction<boolean>>;
}

export default function UserInfo({ setIsOpenUserInfo }: userInfoType) {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await AxiosInstance.get("/user");
        console.log(response);
      } catch (err) {
        alert(err);
      }
    };
    getUserInfo();
  }, []);
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
