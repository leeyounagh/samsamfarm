import { useState, useEffect } from "react";
import * as Styled from "./main.styled";
import Modal from "./modal/modal";
import MainCharacter from "../../data/mainCharacter";
import { MainType } from "../../type/type";
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
  const plantsRenderer = (id: number | undefined) => {
    const mapper: PlantMapper = {
      "1": "./asset/씨앗.png",
      "2": "./asset/새싹.png",
      "3": "./asset/중간새싹.png",
      "4": "./asset/꽃.png",
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
      {mobileSize ? (
        <Styled.MobileLayout>
          <Styled.MobileMaiBackgroundImg src="./asset/모바일배경.jpg" />
        </Styled.MobileLayout>
      ) : (
        <Styled.BackGroundImg src="./asset/메인농장후보.jpg" />
      )}

      <Styled.MainPlantLayout>
        {/* {mobileSize
          ? mobileData.map((item) => {
              return plantsRenderer(item?.plants_id);
            })
          : mainData?.map((item) => {
              return plantsRenderer(item?.plants_id);
            })} */}
      </Styled.MainPlantLayout>

      <Styled.FieldLayOut>
        {mobileSize ? (
          <Styled.FieldDiv>
            {MobileCharacter?.map((item) => (
              <Styled.FieldDiv key={item.id}>
                <Styled.TitleDiv>
                  <Styled.CharacterImg
                    src={item.img}
                    width="60rem"
                    height="60rem"
                  />
                  <button
                    id={`button-${item.id}`}
                    onClick={() => {
                      setIsMainModalOpen(!isMainModalOpen);
                      setUserId(item.id);
                    }}
                  >
                    놀러가기
                  </button>
                </Styled.TitleDiv>
              </Styled.FieldDiv>
            ))}
          </Styled.FieldDiv>
        ) : (
          <Styled.FieldLayoutDiv>
            {MainCharacter?.map((item, index) => (
              <Styled.FieldDiv key={item.id} id="item">
                <Styled.TitleDiv>
                  <Styled.CharacterImg
                    src={item.img}
                    width="60rem"
                    height="60rem"
                  />
                  <Styled.MainPlantLayout>
                    {plantsRenderer(mainData[index].plants_id)}
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
