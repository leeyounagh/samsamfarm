import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import * as Styled from "./carousel.styled";
import CommunityImg from "../../data/CommunityImg";

// import required modules
import { Navigation } from "swiper";

interface SwiperStyle extends React.CSSProperties {
  "--swiper-navigation-color": string;
}

export default function Carousel() {
  return (
    <Swiper
      style={
        {
          "--swiper-navigation-color": "black",
        } as React.CSSProperties & SwiperStyle
      }
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      <Styled.Layout>
        {CommunityImg.map((item) => {
          return (
            <>
              <SwiperSlide>
                <Styled.SwiperDiv>
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
  );
}
