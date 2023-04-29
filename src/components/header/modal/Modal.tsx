import React, { Dispatch, SetStateAction } from "react";
import * as Styled from "./modal.styled";
import { GrClose } from "react-icons/gr";

export default function Modal({ isModalOpen, setIsModalOpen }: ModalType) {
  return (
    <Styled.Layout>
      <Styled.CloseIconDiv>
        <GrClose
          size={50}
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        />
      </Styled.CloseIconDiv>

      <Styled.ModalMenuDiv>
        <div>메뉴1</div>
        <div>메뉴2</div>
        <div>메뉴3</div>
        <div>메뉴4</div>
      </Styled.ModalMenuDiv>
    </Styled.Layout>
  );
}
