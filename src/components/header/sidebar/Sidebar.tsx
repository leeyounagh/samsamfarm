import { useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnclickOutside";
import { GrClose } from "react-icons/gr";
import * as Styled from "./sidebar.styled";
import { Link } from "react-router-dom";
import React from "react";
import KakaoSharing from "./KakaoSharing";

type SidebarProps = {
  isOpen: boolean;
  handleSidebarClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, handleSidebarClose }) => {
  const asideRef = useRef<HTMLDivElement | null>(null);
  const JwtToken = localStorage.getItem("JWtToken");
  useOnClickOutside(asideRef, () => handleSidebarClose());

  return (
    <>
      {isOpen && (
        <Styled.Aside ref={asideRef}>
          <Styled.CloseButton>
            <GrClose
              style={{ cursor: "pointer" }}
              size={45}
              onClick={() => {
                handleSidebarClose();
              }}
              color="#fff"
            />
          </Styled.CloseButton>
          <Styled.SidebarButton>
            {JwtToken ? (
              <>
                <Link to="/main">
                  <Styled.SidebarButtonDetail>
                    Main Page
                  </Styled.SidebarButtonDetail>
                </Link>
                <Link to="/community">
                  <Styled.SidebarButtonDetail>
                    Community
                  </Styled.SidebarButtonDetail>
                </Link>
                <Link to="/mypage">
                  <Styled.SidebarButtonDetail>
                    My Page
                  </Styled.SidebarButtonDetail>
                </Link>
                <Styled.SidebarButtonDetail
                  onClick={() => {
                    localStorage.removeItem("JWtToken");
                    window.location.reload();
                  }}
                >
                  LogOut
                </Styled.SidebarButtonDetail>
                <Styled.KaKaoDiv>
                  <KakaoSharing />
                </Styled.KaKaoDiv>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Styled.SidebarButtonDetail>Login</Styled.SidebarButtonDetail>
                </Link>
                <Styled.KaKaoDiv>
                  <KakaoSharing />
                </Styled.KaKaoDiv>
              </>
            )}
          </Styled.SidebarButton>
        </Styled.Aside>
      )}
    </>
  );
};

export default Sidebar;
