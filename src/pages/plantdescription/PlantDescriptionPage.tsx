import FlowerImg from "../../data/FlowerImg";
import { useNavigate, useParams } from "react-router-dom";
import * as Styled from "./plantdescription.styled";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PlantDesriptionPage() {
  const { plantId } = useParams();
  const navigate = useNavigate();
  const [flowerName, setFlowerName] = useState("");

  useEffect(() => {
    if (plantId) {
      setFlowerName(FlowerImg[Number(plantId)]?.name);
    }
  }, []);

  const handleSubmit = async () => {
    const body = {
      userId: 1,
      deviceId: 1,
      plantType: flowerName,
    };
    try {
      const response = await axios.post(
        "http://34.64.51.215/samsamfarm/api/v1/plant",
        body
      );
      console.log(response);
      navigate(`/story/getplant`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Styled.Layout>
      <Styled.FlowerDiv>
        {plantId && (
          <Styled.FlowerImg src={`${FlowerImg[Number(plantId)].flower}`} />
        )}
      </Styled.FlowerDiv>
      <Styled.DescForm>
        <Styled.DescInnerDiv>
          <h2>{FlowerImg[Number(plantId)]?.story1}</h2>
          <br />
          <br />
          <h2>{FlowerImg[Number(plantId)]?.story2}</h2>
          <br />
          <br />
          <Styled.BtnDiv>
            <Styled.Btn
              onClick={() => {
                if (plantId) {
                  handleSubmit();
                }
              }}
            >
              너로 정했어!
            </Styled.Btn>
            <Styled.Btn
              onClick={() => {
                navigate("/story/selectMbtiPlantPage");
              }}
            >
              다른걸 선택할래....!
            </Styled.Btn>
          </Styled.BtnDiv>
        </Styled.DescInnerDiv>
      </Styled.DescForm>
    </Styled.Layout>
  );
}
