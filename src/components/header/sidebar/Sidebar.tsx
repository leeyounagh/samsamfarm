import { useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnclickOutside";
import { GrClose } from "react-icons/gr";
import * as Styled from "./sidebar.styled";
import { Link } from "react-router-dom";

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
              <Styled.SidebarButtonDetail>커뮤니티</Styled.SidebarButtonDetail>
            </Link>
            <Link to="/mypage">
              <Styled.SidebarButtonDetail>
                마이페이지
              </Styled.SidebarButtonDetail>
            </Link>
            <Styled.SidebarButtonDetail>요건 모하징</Styled.SidebarButtonDetail>
          </Styled.SidebarButton>
        </Styled.Aside>
      )}
    </>
  );
};

export default Sidebar;
