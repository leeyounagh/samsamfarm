import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as Styled from "./userinfo.styled";
import AxiosInstance from "../../../api/AxiosIntance";
interface userInfoType {
  setIsOpenUserInfo: Dispatch<SetStateAction<boolean>>;
}

interface userType {
  created_at: string;
  email: string;
  mbti: string;
  name: string;
  nickname: string;
  phone: string;
  updated_at: string;
}
export default function UserInfo({ setIsOpenUserInfo }: userInfoType) {
  const [userInfo, setUserInfo] = useState<userType>({
    created_at: "",
    email: "",
    mbti: "",
    name: "",
    nickname: "",
    phone: "",
    updated_at: "",
  });

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await AxiosInstance.get("/user");
        const { data } = await response.data;
        setUserInfo(data);
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
            <h2>{userInfo && userInfo?.nickname}</h2>
          </Styled.InfoText>
          <Styled.InfoText>
            <h3>Email:{userInfo?.email}</h3>
          </Styled.InfoText>
          <Styled.InfoText>
            <h3>Mbti: {userInfo?.mbti}</h3>
          </Styled.InfoText>
        </Styled.userInfoBox>
      </Styled.userInfoDiv>
    </Styled.Layout>
  );
}
