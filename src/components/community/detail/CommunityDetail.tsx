import { Dispatch, SetStateAction } from "react";
import * as Styled from "./communitydetail.styled";
import { GrClose } from "react-icons/gr";

interface ModalType {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

export default function CommunityDetail({ setIsOpenModal }: ModalType) {
  return (
    <Styled.Layout>
      <Styled.CloseDiv
        onClick={() => {
          setIsOpenModal(false);
        }}
      >
        <GrClose size={50} />
      </Styled.CloseDiv>

      <Styled.TitleDiv>
        <h1>adsfasdf</h1>
      </Styled.TitleDiv>
      <Styled.DescDiv>
        <h3>asdfadsf</h3>
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
