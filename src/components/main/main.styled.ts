import styled from "styled-components";

export const Layout = styled.main`
  width: 100%;
  z-index: 10;
  height: 60%;
  position: relative;
`;

export const MobileLayout = styled.main`
  width: 100%;
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
`;

export const FieldLayOut = styled.div`
  width: 100rem;
  z-index: 10;

  #item:nth-child(1n) {
    position: absolute;
    top: 20%;
    left: 27%;
    @media (max-width: 768px) {
      position: absolute;
      top: 13%;
      left: 27%;
    }
    @media (max-width: 480px) {
      position: absolute;
      top: 13%;
      left: 12%;
    }
  }
  #item:nth-child(2n) {
    position: absolute;
    top: 20%;
    left: 38%;
    @media (max-width: 768px) {
      position: absolute;
      top: 13%;
      left: 57%;
    }
    @media (max-width: 480px) {
      position: absolute;
      top: 13%;
      left: 54%;
    }
  }
  #item:nth-child(3n) {
    position: absolute;
    top: 55%;
    left: 27%;
    @media (max-width: 768px) {
      position: absolute;
      top: 44%;
      left: 28%;
    }
    @media (max-width: 480px) {
      position: absolute;
      top: 58%;
      left: 13%;
    }
  }
  #item:nth-child(4n) {
    position: absolute;
    top: 55%;
    left: 38%;
    @media (max-width: 768px) {
      position: absolute;
      top: 44%;
      left: 57%;
    }
    @media (max-width: 480px) {
      position: absolute;
      top: 58%;
      left: 54%;
    }
  }
  #item:nth-child(5n) {
    position: absolute;
    top: 20%;
    left: 57%;
  }
  #item:nth-child(6n) {
    position: absolute;
    top: 20%;
    left: 68%;
  }
  #item:nth-child(7n) {
    position: absolute;
    top: 55%;
    left: 68%;
  }
  #item:nth-child(8n) {
    position: absolute;
    top: 55%;
    left: 57%;
  }
`;

export const FieldDiv = styled.div`
  width: 8rem;
  z-index: 10;
  height: 100px;
  background-image: url("./asset/밭누끼.png");
  background-size: cover;
`;

export const CharacterImg = styled.img`
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

export const MainPlantImg = styled.img`
  width: 5rem;
  height: 5rem;
`;

export const TitleDiv = styled.div`
  height: 20vh;

  button {
    position: absolute;
    top: 100px;
    left: 5px;
    width: 8rem;
    height: 4rem;
    cursor: pointer;
  }
`;

export const MainPlantLayout = styled.div`
  width: 100rem;
  #plants:nth-child(1n) {
    position: absolute;
    top: 22%;
    left: 30%;
    z-index: 100;

    @media (max-width: 768px) {
      width: 70px;
      height: 70px;
      position: absolute;
      top: 17%;
      left: 37%;
    }
    @media (max-width: 480px) {
      width: 70px;
      height: 70px;
      position: absolute;
      top: 17%;
      left: 32%;
    }
  }
  #plants:nth-child(2n) {
    position: absolute;
    top: 22%;
    left: 45%;
    z-index: 100;
    @media (max-width: 768px) {
      width: 70px;
      height: 70px;
      position: absolute;
      top: 17%;
      left: 67%;
    }
    @media (max-width: 480px) {
      width: 70px;
      height: 70px;
      position: absolute;
      top: 17%;
      left: 69%;
    }
  }
  #plants:nth-child(3n) {
    position: absolute;
    top: 57%;
    left: 30%;
    z-index: 100;
    @media (max-width: 768px) {
      width: 70px;
      height: 70px;
      position: absolute;
      top: 47%;
      left: 37%;
    }
    @media (max-width: 480px) {
      width: 70px;
      height: 70px;
      position: absolute;
      top: 62%;
      left: 30%;
    }
  }
  #plants:nth-child(4n) {
    position: absolute;
    top: 57%;
    left: 41%;
    z-index: 100;
    @media (max-width: 768px) {
      width: 70px;
      height: 70px;
      position: absolute;
      top: 46%;
      left: 67%;
    }
    @media (max-width: 480px) {
      width: 70px;
      height: 70px;
      position: absolute;
      top: 62%;
      left: 70%;
    }
  }
  #plants:nth-child(5n) {
    position: absolute;
    top: 22%;
    left: 60%;
    z-index: 100;
  }
  #plants:nth-child(6n) {
    position: absolute;
    top: 22%;
    left: 71%;
    z-index: 100;
  }
  #plants:nth-child(7n) {
    position: absolute;
    top: 57%;
    left: 71%;
    z-index: 100;
  }
  #plants:nth-child(8n) {
    position: absolute;
    top: 57%;
    left: 60%;
    z-index: 100;
  }
`;

export const BtnStyle = styled.button`
  font-weight: 600;
  color: #b3933b;
  text-transform: uppercase;
  padding: 1.25em 2em;
  margin-bottom: 10px;
  height: 50px;
  background: white;
  border: 2px solid;
  border-radius: 0.75em;
  transform-style: preserve-3d;
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
  width: 30rem;
  height: 30rem;
  @media (max-width: 480px) {
    width: 25rem;
    height: 28rem;
  }
`;
