import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as Styled from "./communitydetail.styled";
import { CommunityType } from "../../../types";
import Btn1 from "../../button/Btn1";
import AxiosInstance from "../../../api/AxiosIntance";
import { decodeToken } from "react-jwt";
interface ModalType {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  clickedData: CommunityType;
}

interface CommentType {
  comment: string;
  comment_created_at: string;
  content: string;
  nickname: string;
  title: string;
  view_count: number;
}

export default function CommunityDetail({
  setIsOpenModal,
  clickedData,
}: ModalType) {
  const [commentList, setCommentList] = useState<CommentType[]>([
    {
      comment: "안녕?",
      comment_created_at: "2023-05-15T16:26:20.000Z",
      content: "게시물 내용",
      nickname: "슈짱",
      title: "새로운 게시물",
      view_count: 1,
    },
  ]);

  const [comment, setComment] = useState<string>("");
  const JwtToken: any = decodeToken(localStorage.JWtToken);

  useEffect(() => {
    const handleList = async () => {
      const response = await AxiosInstance.get(`/article/${clickedData.id}`);
      const { data } = await response.data;
      setCommentList(data);
    };
    handleList();
  }, [comment]);

  const registerComment = async () => {
    const body = {
      user_id: JwtToken.id,
      article_id: clickedData.id,
      content: comment,
    };
    try {
      const response = await AxiosInstance.post("/article/comment", body);
      if (response.status === 200) {
        alert("댓글이 등록되었습니다.");
        setComment("");
      }
    } catch (err) {
      alert(err);
    }
  };

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
          <h3>작성자:{clickedData?.nickname}</h3>
        </Styled.TitleTextDiv>
      </Styled.TitleDiv>

      <Styled.DescDiv>
        <h3>{clickedData?.content}</h3>
      </Styled.DescDiv>

      <Styled.CommentDiv>
        <Styled.WriteCommentDiv>
          <Styled.Input
            placeholder="댓글을 작성해주세요"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <Styled.BtnDiv
            onClick={() => {
              registerComment();
            }}
          >
            <Btn1 title="등록하기" />
          </Styled.BtnDiv>
        </Styled.WriteCommentDiv>
        <Styled.CommentAreaDiv>
          {commentList.map((item) => {
            return (
              <Styled.CommentListDiv>
                <Styled.CommentInnerDiv>
                  <h3 className="content">{item?.comment}</h3>
                  <h3 className="writer">작성자:{item?.nickname}</h3>
                </Styled.CommentInnerDiv>
              </Styled.CommentListDiv>
            );
          })}
        </Styled.CommentAreaDiv>
      </Styled.CommentDiv>
    </Styled.Layout>
  );
}
