import React, { Dispatch, SetStateAction } from "react";
import * as Styled from "./modal.styled";
import { GrClose } from "react-icons/gr";
import animationData from "../../../styles/72873-mushroom-bros.json";
import Lottie from "react-lottie";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
type ModalType = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

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
      <Styled.ModalMushroomDiv>
        <Lottie options={defaultOptions} height={500} width={500} />
      </Styled.ModalMushroomDiv>
      <Styled.ModalMenuDiv>
        <div>메뉴1</div>
        <div>메뉴2</div>
        <div>메뉴3</div>
        <div>메뉴4</div>
      </Styled.ModalMenuDiv>
    </Styled.Layout>
  );
}
