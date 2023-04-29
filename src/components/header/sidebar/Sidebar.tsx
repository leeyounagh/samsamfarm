import { useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnclickOutside";
import { GrClose } from "react-icons/gr";
import * as Styled from "./sidebar.styled";

type SidebarProps = {
  isOpen: boolean;
  handleSidebarClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, handleSidebarClose }) => {
  const asideRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(asideRef, () => handleSidebarClose());

  const imageUrl = "/asset/인형뽑기.gif";

  return (
    <>
      {isOpen && (
        <Styled.Aside ref={asideRef} imageUrl={imageUrl}>
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
            <Styled.SidebarButtonDetail>커뮤니티</Styled.SidebarButtonDetail>
            <Styled.SidebarButtonDetail>마이페이지</Styled.SidebarButtonDetail>
            <Styled.SidebarButtonDetail>요건 모하징</Styled.SidebarButtonDetail>
          </Styled.SidebarButton>
        </Styled.Aside>
      )}
    </>
  );
};

export default Sidebar;
