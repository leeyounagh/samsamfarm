import styled from "styled-components";

export const Layout = styled.div`
  width: 90rem;
  height: 90vh;
  z-index: 400;
  background: white;
  position: absolute;
  top: -130px;
  left: 15%;
  @media (max-width: 768px) {
    position: absolute;
    top: -100px;
    left: 1%;
    width: 100%;
    height: 100%;
    z-index: 200;
  }
`;
export const FiledBackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  z-index: 300;
`;
export const CloseDiv = styled.div`
  cursor: pointer;
  padding-top: 30px;
  z-index: 50;
  position: absolute;
  top: 5px;
  left: 95%;
  @media (max-width: 768px) {
    position: absolute;
    top: -10px;
    left: 90%;
    color: white;
  }
  @media (max-width: 480px) {
    position: absolute;
    left: 90%;
    color: white;
  }
`;
export const HomePlantImg = styled.img`
  width: 150px;
  height: 100px;
  position: absolute;
  top: 48%;
  left: 63%;
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 52%;
    left: 75%;
  }
`;
export const FarmDiv = styled.div`
  width: 100%;
  height: 60%;
`;

export const FieldDiv = styled.div`
  width: 70%;
  height: 45%;
  z-index: 300;
  position: absolute;
  top: 15%;
  left: 15%;
  @media (max-width: 768px) {
    width: 85%;
    height: 50%;
    position: absolute;
    top: 15%;
    left: 8%;
  }
`;
export const FieldImg = styled.img`
  width: 100%;
  height: 100%;
  z-index: 400;
`;

export const CharacterImg = styled.img`
  position: absolute;
  top: 15%;
  left: 11%;
`;

export const GridImg = styled.img`
  width: 15rem;
  height: 10rem;
  position: absolute;
  top: 40%;
  left: 54%;
  @media (max-width: 768px) {
    width: 12rem;
    height: 8rem;
  }
  @media (max-width: 480px) {
    width: 8rem;
    height: 6rem;
  }
`;

export const ProfileLayout = styled.div`
  width: 16rem;
  height: 30rem;
  position: absolute;
  top: 18%;
  left: 6%;
  z-index: 400;
  text-align: center;
  display: grid;
  justify-content: center;
  h1 {
    margin-top: 10px;
  }
  h2 {
    margin-top: 10px;
  }
`;

export const ProfileImg = styled.img`
  width: 10rem;
  height: 10rem;
  margin-top: 30px;
`;

export const Input = styled.input`
  width: 11rem;
  height: 2rem;
  padding-left: 10px;
`;

export const Button = styled.button`
  width: 12rem;
  height: 2rem;
`;

export const CommentLayout = styled.div`
  width: 80%;
  height: 15rem;
  z-index: 400;
  position: absolute;
  top: 60%;
  left: 10%;
  overflow-y: auto;
  background-color: white;
  margin-top: 20px;
  opacity: 0.8;
  h3 {
    margin-top: 40px;
    margin-left: 20px;
  }
  @media (max-width: 768px) {
    width: 85%;
    height: 25%;
    position: absolute;
    top: 60%;
    left: 8%;
    opacity: 0.8;
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    width: 85%;
    height: 25%;
    position: absolute;
    top: 53%;
    left: 8%;
    opacity: 0.8;
    margin-top: 50px;
    h3 {
      font-size: 0.8rem;
    }
  }
`;
export const MobileFiledImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const MobileInput = styled.input`
  width: 80%;
  height: 2rem;
  margin-left: 10px;
  @media (max-width: 480px) {
    width: 70%;
    height: 1rem;
  }
`;
export const MobileCommentLayout = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
`;

export const MobileBtn = styled.button`
  margin-left: 10px;
  @media (max-width: 480px) {
    width: 20%;
    height: 1.2rem;
    font-size: 0.2rem;
  }
`;
