import styled from "styled-components";

export const Aside = styled.div`
  position: fixed;
  background-size: cover;
  background-position: center;
  background-color: #fff2d7;
  top: 0;
  right: 0px;
  width: 300px;
  height: 100vh;
  z-index: 150;

  @media (max-width: 768px) {
    width: 50%;
    height: 100%;
  }
`;

export const CloseButton = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  z-index: 170;
`;

export const SidebarButtonDetail = styled.button`
  height: 58px;
  background: #e3d78d;
  color: #fff;
  border: none;
  position: relative;
  font-weight: 550;
  width: 240px;
  font-size: 25px;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;

  &:hover {
    background: #fff;
    color: #e3d78d;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #ff7c7c;
    transition: 400ms ease all;
  }

  @media (max-width: 768px) {
    /* width: 100%;
    margin-left: 0;
    margin-bottom: 10px; */
  }
  @media (max-width: 480px) {
    width: 10rem;
    font-size: 15px;
    white-space: nowrap;
    text-align: center;
  }
`;

export const SidebarButton = styled.div`
  height: 35rem;
  margin-top: 50px;
  display: grid;
  justify-content: center;
  @media (max-width: 768px) {
    margin-top: 0;
  }
  @media (max-width: 480px) {
    margin-top: 50px;
  }
`;
export const KaKaoDiv = styled.div`
  height: 58px;
  display: flex;
  justify-content: center;
`;
