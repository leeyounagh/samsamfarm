import styled from "styled-components";

export const Aside = styled.div`
  position: fixed;
  background-size: cover;
  background-position: center;
  background-color: #fff2d7;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
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
  cursor: pointer;
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
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  margin-bottom: 80px;
  margin-left: 30px;
  margin-top: 50px;

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
    width: 100%;
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

export const SidebarButton = styled.div`
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;
