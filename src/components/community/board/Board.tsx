import React, { useEffect, useState } from "react";
import * as Styled from "../community.styled";
import Pagination from "./Pagenation";
import { Link } from "react-router-dom";
import PostList from "./PostList";
import AxiosInstance from "../../../api/AxiosIntance";
import { Post } from "../../../types";

function Board() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [totalData, setTotalData] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const postsPerPage = 10;
  const totalPages = Math.ceil(totalData?.length / postsPerPage);
  const jwtToken = localStorage.getItem("JWtToken");

  useEffect(() => {
    const handleAllcommunity = async () => {
      const response = await AxiosInstance.get("/article");
      const { data } = await response.data;
      setTotalData(data);
    };

    handleAllcommunity();
  }, []);

  useEffect(() => {
    const handlecommunity = async () => {
      try {
        const response = await AxiosInstance.get("/article", {
          params: {
            page: `${currentPage}`,
            perPage: postsPerPage,
          },
        });

        const { data } = await response.data;
        setFilteredPosts(data);
      } catch (err) {
        console.log(err);
      }
    };

    handlecommunity();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleSearchKeywordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchKeyword(event.target.value);
  };

  const handleSearchClick = () => {
    const searchResult = totalData?.filter((data: Post) =>
      data.title.includes(searchKeyword)
    );
    setFilteredPosts(searchResult);
    setCurrentPage(1);
  };

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  }

  return (
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
      <PostList filteredPosts={filteredPosts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <Link to="/CommunityUpdate">
        <Styled.WritingBtn> 글쓰기 </Styled.WritingBtn>
      </Link>
    </Styled.Container>
  );
}

export default Board;
