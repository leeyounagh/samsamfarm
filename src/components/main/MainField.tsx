import { useState, useEffect } from "react";
import * as Styled from "./main.styled";
import Modal from "./modal/Modal";
import MainCharacter from "../../data/mainCharacter";

import { MainType } from "../../types";

import axios from "axios";
import useMediaQuery from "../../hooks/useMediaQuery";
import { v4 as uuidv4 } from "uuid";
import MobileCharacter from "../../data/MobileCharacter";

interface PlantMapper {
  [key: string]: string | undefined;
}

export default function MainField() {
  const [isMainModalOpen, setIsMainModalOpen] = useState<boolean>(false);
  const [mainData, setMainData] = useState<MainType[]>([]);
  const [userId, setUserId] = useState<number>(0);
  const [mobileData, setMobieData] = useState<MainType[]>([
    {
      visiter_id: 0,
      contents: "asfdasd",
      writer: "dsfasd",
      create_at: "fdsaf",
      delete_at: "dasfdas",
      plants_id: 1,
    },
  ]);
  const mobileSize = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const getMainData = async () => {
      try {
        const response = await axios.get("/maintest.json");
        const data = await response.data.data;
        setMainData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getMainData();
  }, []);

  useEffect(() => {
    if (isMainModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMainModalOpen]);

  const plantsRenderer = (id: number | undefined) => {
    const mapper: PlantMapper = {
      "1": "./asset/씨앗.png",
      "2": "./asset/새싹.png",
      "3": "./asset/중간새싹.png",
      "4": "./asset/2번꽃.png",
    };
    return (
      <Styled.MainPlantImg key={uuidv4()} src={mapper[`${id}`]} id="plants" />
    );
  };

  useEffect(() => {
    {
      mobileSize && setMobieData(mainData.slice(0, 4));
    }
  }, [mobileSize, mainData]);

  return (
    <Styled.Layout>
      <Styled.FieldLayOut>
        {mobileSize ? (
          <Styled.MobileLayout>
            <Styled.MobileInnerLayout>
              {MobileCharacter?.map((item, index) => (
                <Styled.FieldDiv key={item.id}>
                  <Styled.TitleDiv>
                    <Styled.CharacterImg src={item.img} />
                    <Styled.MainPlantLayout>
                      {plantsRenderer(mobileData[index]?.plants_id)}
                    </Styled.MainPlantLayout>
                  </Styled.TitleDiv>
                  <Styled.BtnStyle
                    id={`button-${item.id}`}
                    onClick={() => {
                      setIsMainModalOpen(!isMainModalOpen);
                      setUserId(item.id);
                    }}
                  >
                    놀러가기
                  </Styled.BtnStyle>
                </Styled.FieldDiv>
              ))}
            </Styled.MobileInnerLayout>
          </Styled.MobileLayout>
        ) : (
          <Styled.FieldLayoutDiv>
            {MainCharacter?.map((item, index) => (
              <Styled.FieldDiv key={item.id} id="item">
                <Styled.TitleDiv>
                  <Styled.CharacterImg src={item.img} />
                  <Styled.MainPlantLayout>
                    {plantsRenderer(mainData[index]?.plants_id)}
                  </Styled.MainPlantLayout>
                </Styled.TitleDiv>
                <Styled.BtnStyle
                  id={`button-${item.id}`}
                  onClick={() => {
                    setIsMainModalOpen(!isMainModalOpen);
                    setUserId(item.id);
                  }}
                >
                  놀러가기
                </Styled.BtnStyle>
              </Styled.FieldDiv>
            ))}
          </Styled.FieldLayoutDiv>
        )}
      </Styled.FieldLayOut>
      {isMainModalOpen ? (
        <Modal
          isMainModalOpen={isMainModalOpen}
          setIsMainModalOpen={setIsMainModalOpen}
          mainData={mainData}
          userId={userId}
        />
      ) : null}
    </Styled.Layout>
  );
}
