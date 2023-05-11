import styled from "styled-components";

export const Layout = styled.main`
  width: 100%;
  z-index: 10;
  height: 70vh;
  position: relative;
`;

export const MobileLayout = styled.main`
  width: 80%;
  height: 30rem;
  /* height: 100%; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackGroundImg = styled.img`
  width: 60%;
  height: 100%;
  position: absolute;
  left: 20%;
  z-index: 10;
  @media (max-width: 1024px) {
    height: 95vh;
  }
  @media (max-width: 768px) {
    height: 10rem;
  }
`;

export const FieldLayOut = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 480px) {
    height: 80%;
    display: flex;
    justify-content: center;
    background-image: url("./asset/모바일배경2.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const FieldDiv = styled.div`
  position: relative;
  width: 150px;
  z-index: 10;
  height: 25%;
  margin-right: 100px;

  @media (max-width: 1024px) {
    width: 25%;
    height: 10%;
  }

  @media (max-width: 768px) {
    /* width: 30%;
    height: 30%; */
    width: 10rem;
    height: 9rem;
    /* margin-right: 50px;
    margin-left: 10px; */
  }

  @media (max-width: 480px) {
    width: 6rem;
    z-index: 10;
    height: 80px;
    margin-left: 30px;
  }
`;

export const CharacterImg = styled.img`
  width: 6rem;
  height: 6rem;
  z-index: 10;
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
  }
`;

export const MainPlantImg = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
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
  @media (max-width: 1024px) {
    height: 50rem;
    width: 60%;
    padding-top: 100px;
  }
`;
export const BtnStyle = styled.button`
  font-weight: 600;
  color: #b3933b;
  text-transform: uppercase;
  padding: 1.25em 2em;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100%;
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
  left: 0px;
`;

export const MobileInnerLayout = styled.div`
  z-index: 10;
  width: 80%;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  /* padding-right: 30px; */
  height: 20rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 40rem;
    /* height: 20rem; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    height: 40rem;
    background-image: url("./asset/모바일배경2.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    padding-left: 90px;
  }
  @media (max-width: 480px) {
    /* border: 3px solid blue; */
    width: 80%;
    height: 100%;
    background-image: none;
    /* border: 3px solid red; */
    /* border: 3px solid black; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    /* padding-right: 30px; */
    height: 20rem;
  }
`;

export const Div = styled.div`
  width: 30rem;
  height: 60%;
`;
