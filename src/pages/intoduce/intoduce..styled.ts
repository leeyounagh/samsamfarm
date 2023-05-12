import styled from 'styled-components';
import street from '../../../public/asset/스타벅스.gif';
import sunflower from '../../../public/asset/해바라기.png';
import otherPlant from '../../../public/asset/other.png';

export const Introduce_backgroundImg = styled.div`
  background-image: url(${street});
  background-size: 100% 100%;
  width: 100vw;
  height: 70vh;
  background-repeat: no-repeat;
`;

export const Introduce_Script = styled.div`
  width: 100%;
  display: flex;
`;

export const Introduce_span = styled.span`
  margin-left: 30%;
  margin-top: 5%;
`;

export const Introduce_button = styled.button`
  font-size: 1.5em;
`;

export const IntroduceReturnPage_div = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  maring: 30%;
`;

export const IntroduceReturnPage_p = styled.p`
  font-size: 1.8em;
`;

export const SelectPlantPage_div = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
`;

export const SelectPlantPage_userPlant = styled.div`
  background-image: url(${sunflower});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 30%;
  height: 40%;
  max-width: 150px;
  margin: 10%;
  &:hover {
    transform: scale(1.2);
  }
`;
export const SelectPlantPage_otherPlant = styled.div`
  background-image: url(${otherPlant});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 30%;
  height: 40%;
  max-width: 150px;
  margin: 10%;
  &:hover {
    transform: scale(1.2);
  }
`;
