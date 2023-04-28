import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as Styled from "./modal.styled";
import { GrClose } from "react-icons/gr";
import { MainType } from "../../../type/type";
import MainCharacter from "../../../data/mainCharacter";

type ModalType = {
  isMainModalOpen?: boolean;
  setIsMainModalOpen?: Dispatch<SetStateAction<boolean>>;
  setMainData?: Dispatch<SetStateAction<MainType[]>>;
  mainData?: MainType[];
  userId?: number;
};

export default function Modal({
  isMainModalOpen,
  setIsMainModalOpen,
  mainData,
  setMainData,
  userId,
}: ModalType) {
  const [userInfo, setUserInfo] = useState<MainType>();
  useEffect(() => {
    if (mainData && userId) {
      setUserInfo((prevUserInfo) => mainData[userId] ?? prevUserInfo);
    }
  }, [mainData, userId, setUserInfo]);

  return (
    <Styled.Layout>
      <Styled.CloseDiv>
        <GrClose
          size={50}
          onClick={() => {
            if (setIsMainModalOpen) {
              setIsMainModalOpen(!isMainModalOpen);
            }
          }}
        />
      </Styled.CloseDiv>

      <Styled.FarmDiv>
        <Styled.FarmModalDiv>
          {MainCharacter && userId ? (
            <Styled.CharacterImg
              src={
                MainCharacter[userId]
                  ? String(MainCharacter[userId].img)
                  : "./asset/곰돌이.gif"
              }
              width="40%"
              height="80%"
            />
          ) : null}

          <Styled.HomeTitleDiv>
            <h1>이준기님의 농장</h1>
          </Styled.HomeTitleDiv>
          <Styled.GridImg src="./asset/밭누끼.png" width="100%" height="100%" />
          {userInfo?.plants_id === 1 ? (
            <>
              <Styled.HomePlantImg src="./asset/씨앗.png" id="plants" />
            </>
          ) : userInfo?.plants_id === 2 ? (
            <>
              <Styled.HomePlantImg src="./asset/새싹.png" id="plants" />
            </>
          ) : userInfo?.plants_id === 3 ? (
            <>
              <Styled.HomePlantImg src="./asset/중간새싹.png" id="plants" />
            </>
          ) : (
            <>
              <Styled.HomePlantImg src="./asset/꽃.png" id="plants" />
            </>
          )}

          <Styled.PaymentImg src="./asset/돈.gif" width="80px" height="80px" />
        </Styled.FarmModalDiv>
      </Styled.FarmDiv>

      <Styled.CommentDiv>
        <Styled.CommentInputDiv>
          <Styled.CommentInput />
          <Styled.CommentBtn>댓글 달기</Styled.CommentBtn>
        </Styled.CommentInputDiv>
        <Styled.CommentAreaDiv>
          {Array.from({ length: 8 })
            .fill(0)
            .map((item) => {
              return (
                <div style={{ display: "flex" }}>
                  <Styled.CommentListDiv>fdafdsads</Styled.CommentListDiv>
                  <Styled.CommentUserDiv>작성자: 이수연</Styled.CommentUserDiv>
                </div>
              );
            })}
        </Styled.CommentAreaDiv>
      </Styled.CommentDiv>
    </Styled.Layout>
  );
}
