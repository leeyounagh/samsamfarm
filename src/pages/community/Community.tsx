import React, { useEffect } from "react";
import Board from "../../components/community/board/Board";
import Carousel from "../../components/community/Carousel";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCommunityList } from "../../slice/CommunitySlice";

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

  return (
    <>
      <Carousel />
      <Board />
    </>
  );
};

export default Community;
