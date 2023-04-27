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

  return (
    <>
      {isOpen && (
        <Styled.Aside ref={asideRef}>
          <Styled.CloseButton>
            <GrClose
              size={50}
              onClick={() => {
                handleSidebarClose();
              }}
            />
          </Styled.CloseButton>
          gg
        </Styled.Aside>
      )}
    </>
  );
};

export default Sidebar;
