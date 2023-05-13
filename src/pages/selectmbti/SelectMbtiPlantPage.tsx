import { useNavigate } from "react-router-dom";
import * as Styled from "./seletmbti.styled";
import FlowerImg from "../../data/FlowerImg";

export default function SelectMbtiPlantPage() {
  const navigate = useNavigate();
  navigate(`/story/plantDescriptionPage`);

  return (
    <Styled.Layout>
      <Styled.InnerLayout>
        {FlowerImg.map((item) => {
          return (
            <Styled.SelectDiv
              onClick={() => {
                navigate(`/story/plantDescriptionPage/${item.id}`);
              }}
            >
              <Styled.CharacterDiv>
                <Styled.CharacterImg src={item.character} />
                <h2> {item.mbti}</h2>
              </Styled.CharacterDiv>
            </Styled.SelectDiv>
          );
        })}
      </Styled.InnerLayout>
    </Styled.Layout>
  );
}
