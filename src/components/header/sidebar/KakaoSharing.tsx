import { useEffect } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import styled from "styled-components";

const ShareKakaotalk = () => {
  const getKakaotalkInfo = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(import.meta.env.VITE_KAKAOTALK_KEY);
      }

      kakao.Link.createScrapButton({
        container: "#kakao-link-btn",
        requestUrl: "http://34.64.51.215",
        templateId: 93659,
      });
    }
  };
  useEffect(() => {
    getKakaotalkInfo();
  }, []);

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
