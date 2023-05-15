import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as Styled from "../community.styled";
import Pagination from "./Pagenation";
import { Link } from "react-router-dom";
import { RootState } from "../../../store";
import PostList from "./PostList";

interface Post {
  id: number;
  title: string;
  content: string;
  writer: string;
  date: string;
  created_at: string;
  updated_at: string;
}

function Board() {
  const communityData = useSelector((state: RootState) => {
    return state?.community;
  });

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태값 =>백엔드에 보내줄값
  const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태값
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]); // 검색된 게시글 목록 상태값
  const postsPerPage = 10; // 페이지 당 게시글 수
  const totalPages = Math.ceil(communityData?.length / postsPerPage); // 총 페이지 수 =>예는 백엔드에서 보내줄거임
  const indexOfLastPost = currentPage * postsPerPage; // 마지막 게시글 인덱스
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 첫 번째 게시글 인덱스
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost); // 현재 페이지의 게시글 목록
  const jwtToken = localStorage.getItem("JWtToken");

  useEffect(() => {
    setFilteredPosts(communityData);
    // 리덕스 state
  }, [communityData]);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleSearchKeywordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchKeyword(event.target.value);
  };

  // 검색 버튼 클릭 핸들러 함수
  const handleSearchClick = () => {
    const searchResult = communityData?.filter((data: any) =>
      data.title.includes(searchKeyword)
    );
    setFilteredPosts(searchResult);
    setCurrentPage(1);
  };

  // enter 기능
  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  }

  return (
    <>
      <Styled.Container>
        <h1>게시판</h1>
        <Styled.Search>
          <Styled.Searchinput
            type="text"
            value={searchKeyword}
            onChange={handleSearchKeywordChange}
            onKeyPress={handleKeyPress}
            placeholder="제목을 입력하세요"
          />
          <Styled.SearchBtn onClick={handleSearchClick}>검색</Styled.SearchBtn>
        </Styled.Search>
        <PostList posts={currentPosts} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        {jwtToken && (
          <Link to="/CommunityUpdate">
            <Styled.WritingBtn> 글쓰기 </Styled.WritingBtn>
          </Link>
        )}
      </Styled.Container>
    </>
  );
}

export default Board;
