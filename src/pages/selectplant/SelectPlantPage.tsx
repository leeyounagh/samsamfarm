import * as Styled from "./selectplant.syled";
import { useNavigate } from "react-router-dom";
import FlowerImg from "../../data/FlowerImg";

export default function SelectPlantPage() {
  const RandomNum = Math.floor(Math.random() * 7);

  // 꽃을 랜덤으로 섞는로직을 구현한다
  console.log(RandomNum, FlowerImg[RandomNum].flower);
  const navigate = useNavigate();
  const userPlant = () => {
    navigate(`/story/plantDescriptionPage/${RandomNum}`);
  };
  const otherPlant = () => {
    navigate(`/story/selectMbtiPlantPage`);
  };

  return (
    <Styled.Layout>
      <Styled.LayoutInnerDiv>
        <Styled.FlowerDiv
          onClick={() => {
            userPlant();
          }}
        >
          <Styled.FlowerImg src={`${FlowerImg[RandomNum]?.flower}`} />
        </Styled.FlowerDiv>
        <Styled.OtherDiv
          onClick={() => {
            otherPlant();
          }}
        >
          <Styled.OtherImg src="/public/asset/other.png" />
        </Styled.OtherDiv>
      </Styled.LayoutInnerDiv>

      <Styled.TextDiv>
        <h2>너에게 맞는 꽃은 {FlowerImg[RandomNum].name}이야. </h2>
        <h2>하지만 다른꽃도 선택 할수 있어 어떤걸 선택할래?</h2>
      </Styled.TextDiv>
    </Styled.Layout>
  );
}
