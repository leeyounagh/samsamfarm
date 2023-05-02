import React, { useState } from "react";
import * as Styled from "./community.styled";

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
}

// 게시글 목록 데이터 타입 정의
type PostList = Post[];

// 페이지네이션 컴포넌트 props 타입 정의
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// 게시글 목록 컴포넌트 props 타입 정의
interface PostListProps {
  posts: PostList;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return; // 페이지 범위 체크
    onPageChange(page);
  };

  return (
    <Styled.PaginationContainer>
      <Styled.PaginationButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        이전
      </Styled.PaginationButton>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Styled.PaginationButton
          key={i}
          onClick={() => handlePageChange(i + 1)}
          active={i + 1 === currentPage}
        >
          {i + 1}
        </Styled.PaginationButton>
      ))}
      <Styled.PaginationButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        다음
      </Styled.PaginationButton>
    </Styled.PaginationContainer>
  );
};

// 게시글 목록 컴포넌트
const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <>
      게시글
      <Styled.Table>
        <Styled.TableHead>
          <Styled.TableRow>
            <Styled.TableData>번호</Styled.TableData>
            <Styled.TableData>제목</Styled.TableData>
            <Styled.TableData>작성자</Styled.TableData>
            <Styled.TableData>작성일</Styled.TableData>
          </Styled.TableRow>
        </Styled.TableHead>
        <tbody>
          {posts.map((post) => (
            <Styled.TableRow key={post.id}>
              <Styled.TableData>{post.id}</Styled.TableData>
              <Styled.TableData>{post.title}</Styled.TableData>
              <Styled.TableData>{post.author}</Styled.TableData>
              <Styled.TableData>{post.date}</Styled.TableData>
            </Styled.TableRow>
          ))}
        </tbody>
      </Styled.Table>
    </>
  );
};

// 게시글 데이터
const posts: PostList = [
  {
    id: 1,
    title: "첫 번째 게시글",
    author: "홍길동",
    date: "2022-01-01",
  },
  {
    id: 2,
    title: "두 번째 게시글",
    author: "김철수",
    date: "2022-01-02",
  },
  {
    id: 3,
    title: "두 번째 게시글",
    author: "김철수",
    date: "2022-01-02",
  },
  {
    id: 4,
    title: "두 번째 게시글",
    author: "김철수",
    date: "2022-01-02",
  },
  {
    id: 5,
    title: "두 번째 게시글",
    author: "김철수",
    date: "2022-01-02",
  },
  {
    id: 6,
    title: "두 번째 게시글",
    author: "김철수",
    date: "2022-01-02",
  },
  {
    id: 7,
    title: "두 번째 게시글",
    author: "김철수",
    date: "2022-01-02",
  },
  {
    id: 8,
    title: "두 번째 게시글",
    author: "김철수",
    date: "2022-01-02",
  },
  {
    id: 9,
    title: "두 번째 게시글",
    author: "김철수",
    date: "2022-01-02",
  },
  {
    id: 10,
    title: "두 번째 게시글",
    author: "김철수",
    date: "2022-01-02",
  },
  {
    id: 11,
    title: "두 번째 게시글",
    author: "김철수",
    date: "2022-01-02",
  },
  {
    id: 12,
    title: "두 번째 게시글",
    author: "김철수",
    date: "2022-01-02",
  },
  {
    id: 13,
    title: "두 번째 게시글",
    author: "김철수",
    date: "2022-01-02",
  },
];

// 게시글 목록 페이지 컴포넌트
const Community: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태값
  const postsPerPage = 10; // 페이지 당 게시글 수
  const totalPages = Math.ceil(posts.length / postsPerPage); // 총 페이지 수
  const indexOfLastPost = currentPage * postsPerPage; // 마지막 게시글 인덱스
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 첫 번째 게시글 인덱스
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // 현재 페이지의 게시글 목록

  // 페이지 변경 핸들러 함수
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Styled.Container>
      <PostList posts={currentPosts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Styled.Container>
  );
};

export default Community;
