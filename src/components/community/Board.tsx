import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Board = () => {
  const communityData = useSelector((state: RootState) => {
    return state?.community?.list;
  });
  return <div></div>;
};

export default Board;
