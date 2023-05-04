import { Swiper, SwiperSlide } from "swiper/react";
import CommunityDetail from "./detail/CommunityDetail";
import "swiper/css";
import "swiper/css/navigation";
import * as Styled from "./carousel.styled";
import CommunityImg from "../../data/CommunityImg";
import { v4 as uuidv4 } from "uuid";
// import required modules
import { Navigation } from "swiper";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { CommunityType } from "../../type/type";

interface SwiperStyle extends React.CSSProperties {
  "--swiper-navigation-color": string;
}

export default function Carousel() {
  const communityData = useSelector((state: RootState) => {
    return state?.community;
  });
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [newData, setNewData] = useState<any[]>([]); // 자른 데이터 배열
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const dataArr = [];

    for (let i = 0; i < 16; i += 4) {
      dataArr.push(communityData?.slice(i, i + 4));
      setNewData(dataArr);
    }
  }, [communityData]);

  function handleSlideChange(swiper: any) {
    setActiveIndex(swiper.activeIndex);
  }

  return (
    <>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "black",
          } as React.CSSProperties & SwiperStyle
        }
        navigation={true}
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
                    {activeIndex === 0 ? (
                      <>
                        {newData?.[0]?.map((item: CommunityType) => {
                          return (
                            <>
                              <Styled.InfoBox id="infobox">
                                <h1>{item?.title}</h1>
                                <h3>글쓴이: {item?.writer}</h3>
                                <button
                                  onClick={() => {
                                    setIsOpenModal(true);
                                  }}
                                >
                                  바로가기
                                </button>
                              </Styled.InfoBox>
                            </>
                          );
                        })}
                      </>
                    ) : activeIndex === 1 ? (
                      <>
                        {newData?.[1]?.map((item: CommunityType) => {
                          return (
                            <>
                              <Styled.InfoBox id="infobox">
                                <h1>{item?.title}</h1>
                                <h3>글쓴이: {item?.writer}</h3>
                                <button
                                  onClick={() => {
                                    setIsOpenModal(true);
                                  }}
                                >
                                  바로가기
                                </button>
                              </Styled.InfoBox>
                            </>
                          );
                        })}
                      </>
                    ) : activeIndex === 2 ? (
                      <>
                        {newData?.[2]?.map((item: CommunityType) => {
                          return (
                            <>
                              <Styled.InfoBox id="infobox">
                                <h1>{item?.title}</h1>
                                <h3>글쓴이: {item?.writer}</h3>
                                <button
                                  onClick={() => {
                                    setIsOpenModal(true);
                                  }}
                                >
                                  바로가기
                                </button>
                              </Styled.InfoBox>
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        {newData?.[3]?.map((item: CommunityType) => {
                          return (
                            <>
                              <Styled.InfoBox id="infobox">
                                <h1>{item?.title}</h1>
                                <h3>글쓴이: {item?.writer}</h3>
                                <button
                                  onClick={() => {
                                    setIsOpenModal(true);
                                  }}
                                >
                                  바로가기
                                </button>
                              </Styled.InfoBox>
                            </>
                          );
                        })}
                      </>
                    )}

                    <Styled.BackgroundImg src={item.backgroundImg} />
                    <Styled.character1Img src={item.characterImg1} />
                    <Styled.character2Img src={item.characterImg2} />
                    <Styled.character3Img src={item.characterImg3} />
                    <Styled.character4Img src={item.characterImg4} />
                  </Styled.SwiperDiv>
                </SwiperSlide>
              </>
            );
          })}
        </Styled.Layout>
      </Swiper>
      {isOpenModal ? <CommunityDetail setIsOpenModal={setIsOpenModal} /> : null}
    </>
  );
}
