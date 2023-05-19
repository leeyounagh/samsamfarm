import styled from "styled-components";

export const SnowContainer = styled.div`
  background-color: #e6c300;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    /* 화면 너비가 768px 이하일 때 적용되는 스타일 */
    padding: 20px;
  }
`;

export const CenteredImage = styled.img`
  width: 800px;
  height: 550px;

  @media (max-width: 768px) {
    /* 화면 너비가 768px 이하일 때 적용되는 스타일 */
    width: 100%;
    height: auto;
  }
`;
export const StartButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 35px;
  font-weight: 800;
  background-color: #ffe600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 100px;
  z-index: 1;
  transition: 0.6s cubic-bezier(0.77, 0, 0.175, 1);

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: #fff;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  }

  &:hover {
    color: #e6c300;
    background: transparent;

    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @media (max-width: 768px) {
    /* 화면 너비가 768px 이하일 때 적용되는 스타일 */
    font-size: 24px;
    width: 130px;
    height: 65px;
    margin-top: 80px;
  }
`;
