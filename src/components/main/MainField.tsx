import { useState, useEffect } from "react";
import * as Styled from "./main.styled";
import Modal from "./modal/Modal";
import MainCharacter from "../../data/mainCharacter";
import { MainType } from "../../type/type";
import axios from "axios";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function MainField() {
  const [isMainModalOpen, setIsMainModalOpen] = useState<boolean>(false);
  const [mainData, setMainData] = useState<MainType[]>([]);
  const [userId, setUserId] = useState<number>(0);
  const matches = useMediaQuery("(min-width: 768px)");

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

      <Styled.MainPlantLayout>
        {mainData?.map((item) => {
          return (
            <>
              {item?.plants_id === 1 ? (
                <>
                  <Styled.MainPlantImg src="./asset/씨앗.png" id="plants" />
                </>
              ) : item?.plants_id === 2 ? (
                <>
                  <Styled.MainPlantImg src="./asset/새싹.png" id="plants" />
                </>
              ) : item?.plants_id === 3 ? (
                <>
                  <Styled.MainPlantImg src="./asset/중간새싹.png" id="plants" />
                </>
              ) : (
                <>
                  <Styled.MainPlantImg src="./asset/꽃.png" id="plants" />
                </>
              )}
            </>
          );
        })}
      </Styled.MainPlantLayout>

      <Styled.FieldLayOut>
        {MainCharacter?.map((item) => {
          return (
            <>
              <Styled.FieldDiv id="item">
                {item.id}
                <Styled.TitleDiv>
                  <Styled.CharacterImg
                    src={item.img}
                    width="60rem"
                    height="60rem"
                  />

                  <button
                    id="button"
                    onClick={() => {
                      setIsMainModalOpen(!isMainModalOpen);
                      setUserId(item.id);
                    }}
                  >
                    놀러가기
                  </button>
                </Styled.TitleDiv>
              </Styled.FieldDiv>
            </>
          );
        })}
      </Styled.FieldLayOut>
      {isMainModalOpen ? (
        <Modal
          isMainModalOpen={isMainModalOpen}
          setIsMainModalOpen={setIsMainModalOpen}
          mainData={mainData}
          setMainData={setMainData}
          userId={userId}
        />
      ) : null}
    </Styled.Layout>
  );
}
