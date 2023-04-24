import React, { useState } from "react";
import * as Styled from "./header.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import Modal from "./modal/Modal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      {isModalOpen ? (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      ) : null}
      <Styled.Layout>
        <Styled.NavBar
          onClick={() => {
            handleModal();
          }}
        >
          <GiHamburgerMenu size={50} />
        </Styled.NavBar>
        <Styled.Logo>Sam Sam Farm</Styled.Logo>
      </Styled.Layout>
    </>
  );
}
