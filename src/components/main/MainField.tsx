import { useState, useEffect } from "react";
import * as Styled from "./main.styled";
import Modal from "./modal/Modal";
import MainCharacter from "../../data/mainCharacter";
import { MainType } from "../../types";
import AxiosInstance from "../../api/AxiosIntance";
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
  const jwtToken = localStorage.getItem("JWtToken");
  const [mobileData, setMobileData] = useState<MainType[]>([
    {
      created_at: "2023-05-14T15:24:48.000Z",
      current_grade: "1",
      deleted_at: null,
      device_id: 1,
      id: 1,
      nickname: "준기쨩",
      plant_grade_update_time: null,
      plant_type: "Aloe Vera",
      updated_at: "2023-05-14T15:24:48.000Z",
      user_id: 6,
      delete_at: "", // 누락된 속성 추가
      plants_id: 0, // 누락된 속성 추가
    },
  ]);
  const mobileSize = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await AxiosInstance.get("/plant", {
          params: {
            page: 1,
            perPage: 8,
          },
        });
        const { data } = await response.data;
        setMainData(data);
      } catch (err) {
        alert(err);
      }
    };
    if (jwtToken) {
      getData();
    }
  }, []);

  useEffect(() => {
    if (isMainModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMainModalOpen]);

  const plantsRenderer = (id: string | number | undefined) => {
    const mapper: PlantMapper = {
      "1": "/asset/씨앗.png",
      "2": "/asset/새싹.png",
      "3": "/asset/중간새싹.png",
      "4": "/asset/2번꽃.png",
    };
    return (
      <Styled.MainPlantImg key={uuidv4()} src={mapper[`${id}`]} id="plants" />
    );
  };

  useEffect(() => {
    {
      mobileSize && setMobileData(mainData.slice(0, 4));
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
                      {plantsRenderer(mobileData[index]?.current_grade)}
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
                    {plantsRenderer(mainData[index]?.current_grade)}
                  </Styled.MainPlantLayout>
                </Styled.TitleDiv>
                <Styled.BtnStyle
                  id={`button-${item.id}`}
                  onClick={() => {
                    setIsMainModalOpen(!isMainModalOpen);
                    setUserId(index);
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
