import React, { useState, useEffect } from "react";
import * as Styled from "./main.styled";
import Modal from "./modal/Modal";
import MainCharacter from "../data/mainCharacter";
import axios from "axios";

type MainType = {
  visiter_id: number;
  contents: string;
  writer: string;
  create_at: string;
  delete_at: string;
  plants_id: number;
};

export default function MainField() {
  const [isMainModalOpen, setIsMainModalOpen] = useState<boolean>(false);
  const [mainData, setMainData] = useState<MainType[]>([]);

  const getMainData = async () => {
    try {
      const response = await axios.get("/maintest.json");
      const data = await response.data.data;
      setMainData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMainData();
  }, []);
  return (
    <Styled.Layout>
      <Styled.BackGroundImg src="./asset/배경.png" />

      <Styled.FieldLayOut>
        {MainCharacter.map((item) => {
          return (
            <>
              <Styled.FieldDiv id="item">
                <Styled.TitleDiv>
                  <button
                    onClick={() => {
                      setIsMainModalOpen(!isMainModalOpen);
                    }}
                  >
                    놀러가기
                  </button>
                  <Styled.CharacterImg
                    src={item.img}
                    width="50%"
                    height="40%"
                  />
                </Styled.TitleDiv>
              </Styled.FieldDiv>
            </>
          );
        })}
        <Styled.MainPlantLayout>
          {mainData?.map((item) => {
            return (
              <>
                {item?.plants_id === 1 ? (
                  <Styled.MainPlantImg src="./asset/씨앗.png" id="plants" />
                ) : item?.plants_id === 2 ? (
                  <Styled.MainPlantImg src="./asset/새싹.png" id="plants" />
                ) : item?.plants_id === 3 ? (
                  <Styled.MainPlantImg src="./asset/중간새싹.png" id="plants" />
                ) : (
                  <Styled.MainPlantImg src="./asset/꽃.png" id="plants" />
                )}
              </>

              // 조건문 추가
            );
          })}
        </Styled.MainPlantLayout>
      </Styled.FieldLayOut>
      {isMainModalOpen ? (
        <Modal
          isMainModalOpen={isMainModalOpen}
          setIsMainModalOpen={setIsMainModalOpen}
        />
      ) : null}
    </Styled.Layout>
  );
}
