import { useState, useEffect, useRef, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import LogoImage from "../../../public/logo/logo.png";
// import { Nav, NavMenu } from "./header.styled";
import * as Styled from "./header.styled";
import Sidebar from "./sidebar/Sidebar";
import { AudioPlayer } from "../audioplayer/AudioPlayer";
import { TbMusic } from "react-icons/Tb";
import { TbMusicOff } from "react-icons/Tb";

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const JwtToken = localStorage.getItem("JWtToken");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [isOpenedSidebar, setIsOpenedSidebar] = useState<boolean>(false);

  const handleSidebarOpen = () => setIsOpenedSidebar(true);

  const handleSidebarClose = () => setIsOpenedSidebar(false);

  const { isPlaying, togglePlay } = useContext(AudioPlayer);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      togglePlay();
    }
  };

  return (
    <>
      <Styled.Nav scrolled={scrolled}>
        <Link to="/">
          <Styled.Logo src={LogoImage} alt="로고 이미지" />
        </Link>
        <Styled.NavMenu>
          <Styled.MusicPlay>
            {isPlaying ? (
              <TbMusic className="icon" onClick={toggleAudio}>
                음악 일시정지
              </TbMusic>
            ) : (
              <TbMusicOff className="icon" onClick={toggleAudio}>
                음악 재생
              </TbMusicOff>
            )}
            <audio ref={audioRef}>
              <source src="../../../public/audio/bg.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </Styled.MusicPlay>
          {JwtToken ? (
            <Styled.LoginButton
              onClick={() => {
                localStorage.removeItem("JWtToken");
                window.location.reload();
              }}
            >
              로그아웃
            </Styled.LoginButton>
          ) : (
            <Link to="/startpage">
              <Styled.LoginButton>로그인</Styled.LoginButton>
            </Link>
          )}

          <GiHamburgerMenu
            style={{ cursor: "pointer" }}
            size={45}
            onClick={() => {
              handleSidebarOpen();
            }}
            color="#b3933b"
          />
        </Styled.NavMenu>
      </Styled.Nav>
      <Sidebar
        isOpen={isOpenedSidebar}
        handleSidebarClose={handleSidebarClose}
      />
    </>
  );
}
