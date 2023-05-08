import React, { useEffect, useState } from "react";
import Board from "../../components/community/board/Board";
import Carousel from "../../components/community/Carousel";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCommunityList } from "../../slice/CommunitySlice";

// 게시글 목록 컴포넌트

// 게시글 목록 페이지 컴포넌트
const Community: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const CommunityData = async () => {
      const response = await axios.get("./community.json");
      const data = await response.data.data;

      dispatch(setCommunityList(data.reverse()));
    };
    CommunityData();
  }, []);
  // 페이지 변경 핸들러 함수

  // 검색어 변경 핸들러 함수

  return (
    <>
      <Carousel />
      <Board />
    </>
  );
};

export default Community;
