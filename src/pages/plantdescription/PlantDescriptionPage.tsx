import FlowerImg from "../../data/FlowerImg";
import { useNavigate, useParams } from "react-router-dom";
import * as Styled from "./plantdescription.styled";
import axios from "axios";
import { useEffect, useState } from "react";
import Btn1 from "../../components/button/Btn1";
import AxiosInstance from "../../api/AxiosIntance";

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
      userId: 17,
      deviceId: 1,
      plantType: flowerName,
    };
    try {
      const response = await AxiosInstance.post("/plant", body);
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
            <Styled.BtnLayout
              onClick={() => {
                if (plantId) {
                  handleSubmit();
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
              <Btn1 title="  다른걸 선택할래....!" />
            </Styled.BtnLayout>
          </Styled.BtnDiv>
        </Styled.DescInnerDiv>
      </Styled.DescForm>
    </Styled.Layout>
  );
}
