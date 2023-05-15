import { Dispatch, SetStateAction } from "react";
import * as Styled from "./communitydetail.styled";
import { CommunityType } from "../../../types";
import Btn1 from "../../button/Btn1";

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
        <Styled.CloseImg
          src="./asset/closebtn.png"
          style={{ marginRight: "50px" }}
          width="50px"
          height="50px"
          alt="버튼"
        />
      </Styled.CloseDiv>

      <Styled.TitleDiv>
        <Styled.TitleTextDiv>
          <h1>제목:{clickedData?.title}</h1>
        </Styled.TitleTextDiv>
        <Styled.TitleTextDiv>
          <h3>작성자:{clickedData?.writer}</h3>
        </Styled.TitleTextDiv>
      </Styled.TitleDiv>

      <Styled.DescDiv>
        <h3>{clickedData?.content}</h3>
      </Styled.DescDiv>

      <Styled.CommentDiv>
        <Styled.WriteCommentDiv>
          <Styled.Input placeholder="댓글을 작성해주세요" />
          <Styled.BtnDiv>
            <Btn1 title="등록하기" />
          </Styled.BtnDiv>
        </Styled.WriteCommentDiv>
        <Styled.CommentAreaDiv>
          <Styled.CommentListDiv>
            <Styled.CommentInnerDiv>
              <h3 className="content">좋은 말씀 감사합니다</h3>
              <h3 className="writer">작성자:이수연</h3>
            </Styled.CommentInnerDiv>
          </Styled.CommentListDiv>
        </Styled.CommentAreaDiv>
      </Styled.CommentDiv>
    </Styled.Layout>
  );
}
