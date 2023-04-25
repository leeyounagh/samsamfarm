import styled from "styled-components";

export const Layout = styled.header`
  background-color: #92a8d1;
  width: 27vw;
  height: 100%;
  position: absolute;
  /* top: 0px; */
  z-index: 10;
  animation-name: modalmove;
  animation-duration: 1s;
  @keyframes modalmove {
    0% {
      transform: scale(0, 1);
    }

    100% {
      transform: scale(1, 1);
    }
  }
`;
export const CloseIconDiv = styled.div`
  position: absolute;
  top: 5%;
  left: 80%;
  cursor: pointer;
`;

export const ModalMushroomDiv = styled.div`
  position: absolute;
  top: 50%;
  left: -5%;
`;

export const ModalMenuDiv = styled.div`
  border: 1px solid black;
  width: 60%;
  height: 40%;
  position: absolute;
  top: 18%;
  left: 20%;
  display: grid;
  justify-content: center;
  align-items: center;
`;
