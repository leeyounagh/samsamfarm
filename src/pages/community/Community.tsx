import React from "react";
import Board from "../../components/community/board/Board";
import Carousel from "../../components/community/Carousel";
import { withAuth } from "../../utils/withAuth";

const Community: React.FC = () => {
  return (
    <>
      <Carousel />
      <Board />
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Community;
