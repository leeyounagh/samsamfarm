import React, { useState } from "react";
import * as Styled from "./header.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import Modal from "./modal/Modal";
import logoImage from "../../../public/logo/samsamfarm.png";
import { Link } from "react-router-dom";

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
        <Link to={"/"}>
          <Styled.Logo src={logoImage} alt="로고 이미지" />
        </Link>
        <Styled.NavBar>
          <Styled.LoginButtun>
            <Link to={"/Login"}>로그인</Link>
          </Styled.LoginButtun>

          <GiHamburgerMenu
            size={40}
            onClick={() => {
              handleModal();
            }}
          />
        </Styled.NavBar>
      </Styled.Layout>
    </>
  );
}
