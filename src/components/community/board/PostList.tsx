import React, { useState } from "react";
import * as Styled from "../community.styled";
import CommunityDetail from "../detail/CommunityDetail";
import { CommunityType } from "../../../types";
import { Post } from "../../../types";

interface PostListProps {
  filteredPosts: Post[];
}

const PostList: React.FC<PostListProps> = ({ filteredPosts }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [clickedData, setClickedData] = useState<CommunityType>({
    id: 0,
    title: "test",
    content: "test contents",
    nickname: "test writer",
    date: "2023-05-09",
    created_at: "2023-05-09",
    updated_at: "2023-05-09",
  });

  return (
    <>
      <Styled.Table>
        <Styled.TableHead>
          <Styled.TableRow>
            <Styled.TableData>조회수</Styled.TableData>
            <Styled.TableData>제목</Styled.TableData>
            <Styled.TableData>작성자</Styled.TableData>
            <Styled.TableData>작성일</Styled.TableData>
          </Styled.TableRow>
        </Styled.TableHead>
        <tbody>
          {filteredPosts.map((post) => (
            <Styled.TableRow
              key={post.id}
              onClick={() => {
                setIsOpenModal(true);
                setClickedData(post);
              }}
            >
              <Styled.TableData>{post.view_count}</Styled.TableData>
              <Styled.TableData>{post.title}</Styled.TableData>
              <Styled.TableData>{post.nickname}</Styled.TableData>
              <Styled.TableData>
                {post.created_at.substring(0, 10)}
              </Styled.TableData>
            </Styled.TableRow>
          ))}
        </tbody>
      </Styled.Table>
      {isOpenModal && (
        <CommunityDetail
          setIsOpenModal={setIsOpenModal}
          clickedData={clickedData}
        />
      )}
    </>
  );
};

export default PostList;
