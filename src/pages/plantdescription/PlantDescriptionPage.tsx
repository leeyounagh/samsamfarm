import FlowerImg from "../../data/FlowerImg";
import { useNavigate, useParams } from "react-router-dom";
import * as Styled from "./plantdescription.styled";
import { useEffect, useState } from "react";
import Btn1 from "../../components/button/Btn1";

export default function PlantDesriptionPage() {
  const { plantId } = useParams();
  const selectedPlantId = Number(plantId);
  const navigate = useNavigate();
  const [flowerName, setFlowerName] = useState("");

  useEffect(() => {
    if (selectedPlantId) {
      setFlowerName(FlowerImg[selectedPlantId]?.name);
    }
  }, [selectedPlantId]);

  return (
    <Styled.Layout>
      <Styled.FlowerDiv>
        {plantId && (
          <Styled.FlowerImg src={`${FlowerImg[selectedPlantId].flower}`} />
        )}
      </Styled.FlowerDiv>
      <Styled.DescForm>
        <Styled.DescInnerDiv>
          <Styled.StoryText>
            {FlowerImg[selectedPlantId]?.story1}
          </Styled.StoryText>
          <br />
          <br />
          <Styled.StoryText>
            {FlowerImg[selectedPlantId]?.story2}
          </Styled.StoryText>
          <br />
          <br />
          <Styled.BtnDiv>
            <Styled.BtnLayout
              onClick={() => {
                if (plantId) {
                  alert(`당신이 선택한 꽃은 ${flowerName} 입니다.`);
                  navigate("/story/getplant");
                }
              }}
            >
              <Btn1 title="너로 정했어!" />
            </Styled.BtnLayout>
            <Styled.BtnLayout
              onClick={() => {
                navigate("/story/selectMbtiPlantPage");
              }}
            >
              <Btn1 title="  다른걸 선택할래..!" />
            </Styled.BtnLayout>
          </Styled.BtnDiv>
        </Styled.DescInnerDiv>
      </Styled.DescForm>
    </Styled.Layout>
  );
}
