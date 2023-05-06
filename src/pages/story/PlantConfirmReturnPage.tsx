// import * as Styled from './story.styled';
import { useNavigate } from 'react-router-dom';

export default function PlantConfirmReturnPage() {
  const title = '아니라고? 거짓말,,,,';
  const navigate = useNavigate();
  const returnClickHandler = () => {
    navigate(`/plantConfirmPage`);
  };
  const againClickHandler = () => {
    navigate(`/selectMbtiPlantPage`);
  };

  return (
    <div>
      <div>{title}</div>
      <div>
        <div onClick={returnClickHandler}>이전으로 돌아가기</div>
        <div onClick={againClickHandler}>작물 다시 선택하기</div>
      </div>
    </div>
  );
}
