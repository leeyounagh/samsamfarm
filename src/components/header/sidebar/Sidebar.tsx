import { useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnclickOutside";
import { GrClose } from "react-icons/gr";
import * as Styled from "./sidebar.styled";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import KakaoSharing from "./KakaoSharing";

type SidebarProps = {
  isOpen: boolean;
  handleSidebarClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, handleSidebarClose }) => {
  const asideRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(asideRef, () => handleSidebarClose());

  return (
    <>
      {isOpen && (
        <Styled.Aside ref={asideRef}>
          <Styled.CloseButton>
            <GrClose
              size={45}
              onClick={() => {
                handleSidebarClose();
              }}
              color="#fff"
            />
          </Styled.CloseButton>
          <Styled.SidebarButton>
            <Link to="/community">
              <Styled.SidebarButtonDetail>Community</Styled.SidebarButtonDetail>
            </Link>
            <Link to="/mypage">
              <Styled.SidebarButtonDetail>My Page</Styled.SidebarButtonDetail>
            </Link>

            <Styled.SidebarButtonDetail>Main Page</Styled.SidebarButtonDetail>
            <Styled.SidebarButtonDetail>LogOut</Styled.SidebarButtonDetail>
          </Styled.SidebarButton>

          <KakaoSharing />
        </Styled.Aside>
      )}
    </>
  );
};

export default Sidebar;
