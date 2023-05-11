import { Dispatch, SetStateAction, useEffect } from "react";
import * as Styled from "./communitydetail.styled";
<<<<<<< HEAD
import { CommunityType } from "../../../types/type";
=======
import { GrClose } from "react-icons/gr";
import { CommunityType } from "../../../types";
>>>>>>> 4530c0e978bd32d7a0043968d299152190eb6da3
interface ModalType {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  clickedData: CommunityType;
}

export default function CommunityDetail({
  setIsOpenModal,
  clickedData,
}: ModalType) {
  return (
    <Styled.Layout>
      <Styled.CloseDiv
        onClick={() => {
          setIsOpenModal(false);
        }}
      >
        <img
          src="./asset/closebtnblack.png"
          style={{ marginRight: "50px" }}
          width="50px"
          height="50px"
          alt="버튼"
        />
      </Styled.CloseDiv>

      <Styled.TitleDiv>
        <h1>{clickedData?.title}</h1>
        <h3>작성자:{clickedData?.writer}</h3>
      </Styled.TitleDiv>
      <Styled.DescDiv>
        <h3>{clickedData?.content}</h3>
      </Styled.DescDiv>

      <Styled.CommentDiv>
        <Styled.WriteCommentDiv>
          <Styled.Input placeholder="댓글을 작성해주세요" />
          <Styled.Btn>등록하기</Styled.Btn>
        </Styled.WriteCommentDiv>
        <Styled.CommentAreaDiv>
          <Styled.CommentListDiv>
            <Styled.CommentInnerDiv>
              <h3 className="content">adsfadsf</h3>
              <h3 className="writer">작성자:이수연</h3>
            </Styled.CommentInnerDiv>
          </Styled.CommentListDiv>
        </Styled.CommentAreaDiv>
      </Styled.CommentDiv>
    </Styled.Layout>
  );
}
