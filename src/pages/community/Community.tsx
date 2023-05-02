import React from "react";
import * as Styled from "./community.styled";
import Board from "../../components/community/Board";
import Carousel from "../../components/community/Carousel";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCommunityList } from "../../slice/CommunitySlice";

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
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

Community.defaultProps = defaultProps;

const App: React.FC = () => {
  const boardItems: BoardItem[] = [
    {
      id: 1,
      title: "게시글 제목1",
      author: "작성자1",
      date: "2023-04-30",
    },
    {
      id: 2,
      title: "게시글 제목2",
      author: "작성자2",
      date: "2023-04-29",
    },
    {
      id: 3,
      title: "게시글 제목3",
      author: "작성자3",
      date: "2023-04-29",
    },
    {
      id: 4,
      title: "게시글 제목4",
      author: "작성자4",
      date: "2023-04-29",
    },
    {
      id: 5,
      title: "게시글 제목5",
      author: "작성자5",
      date: "2023-04-29",
    },
    {
      id: 6,
      title: "게시글 제목6",
      author: "작성자6",
      date: "2023-04-29",
    },
    // ... 이하 생략
  ];

  return (
    <div>
         <Carousel />
      <Board />
      <h1>게시판</h1>
      <Community items={boardItems} />
    </div>
  );
};

export default Community;
