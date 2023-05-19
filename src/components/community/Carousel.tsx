import { Swiper, SwiperSlide } from "swiper/react";
import CommunityDetail from "./detail/CommunityDetail";
import "swiper/css";
import "swiper/css/navigation";
import * as Styled from "./carousel.styled";
import CommunityImg from "../../data/CommunityImg";
import { v4 as uuidv4 } from "uuid";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { CommunityType } from "../../types";
import Btn1 from "../button/Btn1";
import useMediaQuery from "../../hooks/useMediaQuery";
import AxiosInstance from "../../api/AxiosIntance";
import "swiper/swiper-bundle.css";
interface SwiperStyle extends React.CSSProperties {
  "--swiper-navigation-color": string;
}

export default function Carousel() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [newData, setNewData] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [clickedData, setClickedData] = useState<CommunityType>({
    id: 0,
    title: "test",
    content: "test contents",
    nickname: "test writer",
    date: "2023-05-09",
    created_at: "2023-05-09",
    updated_at: "2023-05-09",
  });

  const mobileSize = useMediaQuery("(max-width: 480px)");

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpenModal]);

  useEffect(() => {
    const handlecommunity = async () => {
      try {
        const response = await AxiosInstance.get("/article", {
          params: {
            page: `${activeIndex + 1}`,
            perPage: 4,
          },
        });
        const { data } = await response.data;

        setNewData(data);
      } catch (err) {
        console.log(err);
      }
    };
    handlecommunity();
  }, [activeIndex]);

  function handleSlideChange(swiper: any) {
    setActiveIndex(swiper.activeIndex);
  }

  const dataRenderer = () => {
    let filteredData = newData;
    if (mobileSize) {
      filteredData = filteredData.slice(0, 3);
    }
    return filteredData?.map((item: CommunityType) => {
      return (
        <Styled.InfoBox id="infobox">
          <h1>
            제목:
            {item?.title.length > 8 ? item?.title.substring(0, 6) : item?.title}
          </h1>
          <h3>글쓴이: {item?.nickname}</h3>
          <Styled.BtnDiv>
            <Btn1
              title="바로가기"
              onClick={() => {
                setIsOpenModal(true);
                setClickedData(item);
              }}
            />
          </Styled.BtnDiv>
        </Styled.InfoBox>
      );
    });
  };
  return (
    <>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "black",
          } as React.CSSProperties & SwiperStyle
        }
        navigation={mobileSize ? false : true}
        pagination={{ clickable: true }}
        modules={[Navigation]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        <Styled.Layout key={uuidv4()}>
          {CommunityImg?.map((item) => {
            return (
              <>
                <SwiperSlide
                  onClick={(e) => {
                    const id = (e.target as HTMLElement).dataset.id;
                    if (id) {
                      setActiveIndex(parseInt(id));
                    }
                  }}
                >
                  <Styled.SwiperDiv key={uuidv4()}>
                    {dataRenderer()}

                    <Styled.BackgroundImg src={item.backgroundImg} />
                    <Styled.character1Img src={item.characterImg1} />
                    <Styled.character2Img src={item.characterImg2} />
                    <Styled.character3Img src={item.characterImg3} />
                    {!mobileSize && (
                      <Styled.character4Img src={item.characterImg4} />
                    )}
                  </Styled.SwiperDiv>
                </SwiperSlide>
              </>
            );
          })}
        </Styled.Layout>
      </Swiper>
      {isOpenModal && (
        <CommunityDetail
          setIsOpenModal={setIsOpenModal}
          clickedData={clickedData}
        />
      )}
    </>
  );
}
