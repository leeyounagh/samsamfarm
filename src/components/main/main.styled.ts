import styled from "styled-components";

export const Layout = styled.main`
  width: 100vw;
  z-index: 10;
  position: relative;
  margin-bottom: 100px;
`;

export const MobileLayout = styled.main`
  width: 80%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 50rem;
  }
  @media (max-width: 480px) {
    width: 70%;
    height: 25rem;
  }
`;

export const BackGroundImg = styled.img`
  width: 60%;
  height: 100%;
  position: absolute;
  left: 20%;
  z-index: 10;
  @media (max-width: 1400px) {
    width: 60%;
    height: 90vh;
  }
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
    background-image: url("/asset/농장배경2.png");
    background-size: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media (max-width: 480px) {
    /* width: 25.5rem; */
    height: 30rem;
  }
`;

export const FieldDiv = styled.div`
  position: relative;
  width: 10rem;
  height: 8rem;
  z-index: 10;
  margin-right: 100px;
  background-image: url("./asset/밭누끼.png");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 1024px) {
    width: 180px;
    height: 100px;
  }

  @media (max-width: 768px) {
    width: 10rem;
    height: 9rem;
  }

  @media (max-width: 480px) {
    width: 7rem;
    height: 6rem;
    /* height: 6rem; */
    z-index: 10;
    margin-left: 30px;
  }
`;

export const CharacterImg = styled.img`
  width: 90px;
  height: 100px;
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
  width: 50px;
  height: 80px;
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

export const TitleDiv = styled.div`
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 35px 0px 35px;
  @media (max-width: 1400px) {
    height: 6rem;
  }
  @media (max-width: 748px) {
    height: 8rem;
  }
  @media (max-width: 480px) {
    height: 6rem;
  }
`;

export const MainPlantLayout = styled.div`
  z-index: 10;
`;
export const FieldLayoutDiv = styled.div`
  width: 60%;
  height: 55rem;
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 100px;
  background-image: url("./asset/농장배경2.png");
  background-size: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1400px) {
    width: 60%;
    height: 60rem;
    margin-top: 0px;
  }
  @media (max-width: 1024px) {
    height: 75rem;
    width: 40rem;
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
  height: 3rem;
  background: white;
  border: 2px solid;
  border-radius: 0.75em;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: 15px;
    font-size: 0.8rem;
  }
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1);
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
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
  grid-template-columns: 0.8fr 0.8fr;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 40rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    height: 40rem;
    padding-left: 90px;
  }
  @media (max-width: 480px) {
    width: 100%;
    margin-right: 20px;
    background-image: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 20rem;
  }
`;
