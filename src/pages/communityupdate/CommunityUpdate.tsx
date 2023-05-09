import { useState } from "react";
import * as Styled from "./communityupdate.styled";
import axios from "axios";

const CommunityUpdate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("http://34.64.51.215/samsamfarm/api/article", {
        title: title,
        content: content,
        user_id: 1,
      });
      alert("글이 작성되었습니다.");
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Styled.Container>
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
    </Styled.Container>
  );
};

export default CommunityUpdate;
