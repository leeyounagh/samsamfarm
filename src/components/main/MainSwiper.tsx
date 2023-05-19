import { CSSProperties } from "react";
import * as Styled from "./swiper.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, HashNavigation } from "swiper";
import { v4 as uuidv4 } from "uuid";
import CommunityThumbnail from "../../data/CommunityThumbnail";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AxiosInstance from "../../api/AxiosIntance";
import { useEffect, useState } from "react";
import { CommunityType } from "../../types";
import CommunityDetail from "../community/detail/CommunityDetail";
interface SwiperStyle extends CSSProperties {
  "--swiper-navigation-color": string;
}

export default function MainSwiper() {
  const [communityData, setCommunityData] = useState<CommunityType[]>([
    {
      id: 0,
      title: "test",
      content: "test contents",
      nickname: "test writer",
      date: "2023-05-09",
      created_at: "2023-05-09",
      updated_at: "2023-05-09",
    },
  ]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [clickedData, setClickedData] = useState<CommunityType>({
    id: 0,
    title: "test",
    content: "test contents",
    nickname: "test writer",
    date: "2023-05-09",
    created_at: "2023-05-09",
    updated_at: "2023-05-09",
  });
  useEffect(() => {
    const handlecommunity = async () => {
      const response = await AxiosInstance.get("/article", {
        params: {
          page: 1,
          perPage: 20,
        },
      });
      const { data } = await response.data;
      setCommunityData(data);
    };
    handlecommunity();
  }, []);
  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpenModal]);
  return (
    <Styled.Layout>
      {isOpenModal && (
        <CommunityDetail
          setIsOpenModal={setIsOpenModal}
          clickedData={clickedData}
        />
      )}
      <Styled.InnerLayout>
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
        >
          {communityData?.map((item, index) => (
            <SwiperSlide className="list-style" key={uuidv4()}>
              <Styled.ListDiv
                key={uuidv4()}
                onClick={() => {
                  setIsOpenModal(true);
                  setClickedData(item);
                }}
              >
                <Styled.ListImg src={CommunityThumbnail[index]?.img} />
                <Styled.TitleDiv>{item?.title}</Styled.TitleDiv>
              </Styled.ListDiv>
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.InnerLayout>
    </Styled.Layout>
  );
}
