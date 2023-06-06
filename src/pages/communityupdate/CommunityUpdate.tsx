import { useState } from "react";
import * as Styled from "./communityupdate.styled";
import AxiosInstance from "../../api/AxiosIntance";
import { decodeToken } from "react-jwt";
import { UserType } from "../../types";
import { withAuth } from "../../utils/withAuth";

const CommunityUpdate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const JwtToken: UserType | null = decodeToken(localStorage.JWtToken);

  const handleSubmit = async () => {
    try {
      if (title.length === 0 || content.length === 0) {
        alert("모든 값을 입력해 주세요");
      }
      await AxiosInstance.post("/article", {
        title: title,
        content: content,
        user_id: JwtToken?.id,
      });
      alert("글이 작성되었습니다.");
      window.location.href = "/community";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styled.Container>
      <Styled.InnerContainer>
        <h1>글쓰기 페이지</h1>
        <Styled.TitleInput
          type="text"
          placeholder="제목을 입력하세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Styled.ContentInput
          placeholder="내용을 입력하세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Styled.SubmitButton onClick={handleSubmit}>
          글 올리기
        </Styled.SubmitButton>
      </Styled.InnerContainer>
    </Styled.Container>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default withAuth(CommunityUpdate);
