import React, { Dispatch, SetStateAction } from "react";
import * as Styled from "./modal.styled";
import { GrClose } from "react-icons/gr";

type ModalType = {
  isMainModalOpen: boolean;
  setIsMainModalOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Modal({
  isMainModalOpen,
  setIsMainModalOpen,
}: ModalType) {
  return (
    <Styled.Layout>
      <Styled.CloseDiv>
        <GrClose
          size={50}
          onClick={() => {
            setIsMainModalOpen(!isMainModalOpen);
          }}
        />
      </Styled.CloseDiv>
      <Styled.FarmDiv>
        <Styled.FarmModalDiv>
          <Styled.BearImg src="./asset/곰돌이.gif" width="40%" height="80%" />
          <Styled.GridImg src="./asset/밭누끼.png" width="100%" height="100%" />
          <Styled.PlantImg
            src="./asset/해바라기.png"
            width="10%"
            height="10%"
          />
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
