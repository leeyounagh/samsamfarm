import { CSSProperties } from "react";
import * as Styled from "./swiper.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, HashNavigation } from "swiper";
import { v4 as uuidv4 } from "uuid";
import CommunityThumbnail from "../../data/CommunityThumbnail";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface SwiperStyle extends CSSProperties {
  "--swiper-navigation-color": string;
}

export default function MainSwiper() {
  return (
    <Styled.Layout>
      <Swiper
        key={uuidv4()}
        style={
          {
            "--swiper-navigation-color": "black",
          } as SwiperStyle
        }
        slidesPerView={3}
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        {CommunityThumbnail.map((item) => (
          <SwiperSlide style={{ marginLeft: "80px" }} key={uuidv4()}>
            <Styled.ListDiv key={uuidv4()}>
              <Styled.ListImg src={item.img} />
              <Styled.TitleDiv>안녕하세요!</Styled.TitleDiv>
            </Styled.ListDiv>
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.Layout>
  );
}
