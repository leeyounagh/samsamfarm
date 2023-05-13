import { useEffect } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import styled from "styled-components";

const ShareKakaotalk = () => {
  useEffect(() => {
    getKakaotalkInfo();
  }, []);

  const getKakaotalkInfo = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(import.meta.env.VITE_KAKAOTALK_KEY);
      }

      // kakao.Link.createDefaultButton({
      //   // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
      //   container: "#kakao-link-btn",
      //   objectType: "feed",
      //   content: {
      //     title: "SamSamFarm에 초대합니다",
      //     description: "이걸 안옴?",
      //     imageUrl: "public/logo/kakao.png", // i.e. .env.FETCH_URL + '/logo.png'
      //     link: {
      //       mobileWebUrl: "http://34.64.51.215",
      //       webUrl: "http://34.64.51.215",
      //     },
      //   },

      //   buttons: [
      //     {
      //       title: "놀러 가기",
      //       link: {
      //         mobileWebUrl: "http://34.64.51.215",
      //         webUrl: "http://34.64.51.215",
      //       },
      //     },
      //   ],
      // });
      kakao.Link.createScrapButton({
        container: "#kakao-link-btn",
        requestUrl: "http://34.64.51.215",
        templateId: 93659,
      });
    }
  };

  return (
    <>
      {window.innerWidth <= 640 ? (
        <RiKakaoTalkFill
          size="60"
          id="kakao-link-btn"
          onClick={() => getKakaotalkInfo()}
        ></RiKakaoTalkFill>
      ) : (
        <Button id="kakao-link-btn" onClick={() => getKakaotalkInfo()}>
          <RiKakaoTalkFill size="60"></RiKakaoTalkFill>
        </Button>
      )}
    </>
  );
};
const Button = styled.button`
  border: none;
  z-index: 10;
  cursor: pointer;
  background-color: rgb(255, 251, 30);
  margin-left: 40%;
  border-radius: 20px;
`;

export default ShareKakaotalk;
