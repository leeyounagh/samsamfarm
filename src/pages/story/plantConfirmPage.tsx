import * as Styled from './story.styled';
import { useNavigate } from 'react-router-dom';

export default function PlantConfirmPage() {
  const yes = '맞아!';
  const no = '아닌데?';
  const navigate = useNavigate();
  const yesClickHandler = () => {
    navigate(`/selectPlantPage`);
  };
  const noClickHandler = () => {
    navigate(`/plantConfirmReturnPage`);
  };

  return (
    <div>
      <div>
        <div>user MBTI</div>
        <div>user Plant</div>
      </div>
      <div>글</div>
      <div>
        <Styled.Introduce_button onClick={yesClickHandler}>{yes}</Styled.Introduce_button>
        <Styled.Introduce_button onClick={noClickHandler}>{no}</Styled.Introduce_button>
      </div>
    </div>
  );
}
