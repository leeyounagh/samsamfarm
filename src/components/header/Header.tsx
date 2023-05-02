import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import LogoImage from "../../../public/logo/logo.png";
// import { Nav, NavMenu } from "./header.styled";
import * as Styled from "./header.styled";
import Sidebar from "./sidebar/Sidebar";

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);

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

  const [isOpenedSidebar, setIsOpenedSidebar] = useState<boolean>(false);

  const handleSidebarOpen = () => setIsOpenedSidebar(true);

  const handleSidebarClose = () => setIsOpenedSidebar(false);

  return (
    <>
      <Styled.Nav scrolled={scrolled}>
        <Link to="/">
          <Styled.Logo src={LogoImage} alt="로고 이미지" />
        </Link>
        <Styled.NavMenu>
          <Link to="/Login">
            <Styled.LoginButton>로그인</Styled.LoginButton>
          </Link>
          {/* <button type="button">로그인</button> */}
          <GiHamburgerMenu
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
