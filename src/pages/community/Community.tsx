import React, { useEffect, useState } from "react";
import * as Styled from "./community.styled";
import Board from "../../components/community/Board";
import Carousel from "../../components/community/Carousel";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCommunityList } from "../../slice/CommunitySlice";

type BoardItem = {
  id: number;
  title: string;
  author: string;
  date: string;
};

type BoardListProps = {
  items?: BoardItem[]; // items가 선택적 속성으로 설정되어 있음
};

const defaultProps: BoardListProps = {
  items: [], // items의 초기값으로 빈 배열을 설정함
};

const Community: React.FC<BoardListProps> = ({ items = [] }) => {
  return (
    <Styled.Container>
      <Styled.Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: BoardItem) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {/* <Styled.TitleLink href={`/boards/${item.id}`}>
                  {item.title}
                </Styled.TitleLink> */}
              </td>
              <td>{item.author}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </Styled.Table>
    </Styled.Container>
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

  const dispatch = useDispatch();
  const CommunityData = async () => {
    const response = await axios.get("./community.json");
    const data = await response.data.data;

    dispatch(setCommunityList(data));
  };

  useEffect(() => {
    CommunityData();
  }, []);

  return (
    <div>
      <Carousel />
      <Board />
      <h1>게시판</h1>
      <Community items={boardItems} />
    </div>
  );
};

export default App;
