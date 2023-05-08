import styled from "styled-components";

export const Layout = styled.main`
  width: 100%;
  z-index: 10;
  height: 60%;
  position: relative;
`;

export const MobileLayout = styled.main`
  width: 80%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackGroundImg = styled.img`
  width: 60%;
  height: 35rem;
  position: absolute;
  left: 20%;
  z-index: 10;
`;

export const FieldLayOut = styled.div`
  width: 100%;
  height: 60vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const FieldDiv = styled.div`
  position: relative;
  width: 13%;
  z-index: 10;
  height: 25%;
  margin-right: 100px;

  @media (max-width: 768px) {
    width: 30%;
    height: 30%;
    margin-right: 50px;
    margin-left: 10px;
  }

  @media (max-width: 480px) {
    width: 6rem;
    z-index: 10;
    height: 80px;
  }
`;

export const CharacterImg = styled.img`
  width: 4rem;
  height: 4rem;
  z-index: 10;
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;

export const MainPlantImg = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const TitleDiv = styled.div`
  height: 13vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainPlantLayout = styled.div`
  width: 100rem;
  z-index: 10;
`;
export const FieldLayoutDiv = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  padding-left: 100px;
`;
export const BtnStyle = styled.button`
  font-weight: 600;
  color: #b3933b;
  text-transform: uppercase;
  padding: 1.25em 2em;
  margin-bottom: 10px;
  width: 100%;
  height: 60%;
  background: white;
  border: 2px solid;
  border-radius: 0.75em;
  transform-style: preserve-3d;
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1);
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
    }

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    box-shadow: 0 0 0 2px, 0 0.325em 0 0;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  &:hover {
    transform: translate(0, 0.25em);
    &::before {
      box-shadow: 0 0 0 2px, 0 0.5em 0 0;
      transform: translate3d(0, 0.5em, -1em);
    }
  }

  &:active {
    transform: translate(0em, 0.75em);
    &::before {
      box-shadow: 0 0 0 2px, 0 0;
      transform: translate3d(0, 0, -1em);
    }
  }
`;

export const MobileMaiBackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  @media (max-width: 480px) {
    width: 20rem;
    height: 23rem;
  }
`;

export const MobileInnerLayout = styled.div`
  border: 2px solid blue;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  height: 80%;
  @media (max-width: 768px) {
    width: 80%;
    height: 80%;
  }
`;
