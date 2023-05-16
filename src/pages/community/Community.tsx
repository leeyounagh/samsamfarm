import React, { useEffect } from "react";
import Board from "../../components/community/board/Board";
import Carousel from "../../components/community/Carousel";
import axios from "axios";

const Community: React.FC = () => {
  return (
    <>
      <Carousel />
      <Board />
    </>
  );
};

export default Community;
