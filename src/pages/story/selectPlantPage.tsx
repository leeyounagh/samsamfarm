import * as Styled from './story.styled';
import { useNavigate } from 'react-router-dom';

export default function SelectPlantPage() {
  const MBTIPlant = '백합';
  const space = '\n';
  const navigate = useNavigate();
  const userPlant = () => {
    navigate(`/plantConfirmPage`);
  };
  const otherPlant = () => {
    navigate(`/selectMbtiPlantPage`);
  };

  return (
    <div style={{ width: '100vw', height: '70vh' }}>
      <Styled.SelectPlantPage_div>
        <Styled.SelectPlantPage_userPlant onClick={userPlant}> </Styled.SelectPlantPage_userPlant>
        <Styled.SelectPlantPage_otherPlant onClick={otherPlant}> </Styled.SelectPlantPage_otherPlant>
      </Styled.SelectPlantPage_div>
      <Styled.IntroduceReturnPage_div>
        <p style={{ fontSize: '1.2em' }}>
          너의 MBTI에 맞는 꽃은 {MBTIPlant}이야. <br /> 하지만 다른 꽃도 키울 수 있어 원하는 걸 선택할래?
        </p>
      </Styled.IntroduceReturnPage_div>
    </div>
  );
}
