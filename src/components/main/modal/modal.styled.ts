import styled from "styled-components";
import color from "../../../styles/color";

export const Layout = styled.div`
  width: 65vw;
  height: 83vh;
  z-index: 400;
  background: white;
  position: fixed;
  top: 5rem;
  left: 20rem;
  font-family: "DOSPilgiMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/DOSPilgiMedium.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
  position: fixed;
  top: 120px;
  background-color: ${color.main};
  @media (max-width: 1024px) {
    position: fixed;
    top: 120px;
    left: 20%;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 120px;
    height: 63vh;
  }
  @media (max-width: 480px) {
    width: 22rem;
    height: 75vh;
    left: 0px;
  }
  h1 {
    text-align: center;
  }
`;
export const FiledBackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  z-index: 300;
`;
export const CloseDiv = styled.div`
  cursor: pointer;
  width: 100%;
  padding-top: 30px;
  z-index: 50;
  position: absolute;
  left: 90%;
  top: 5%;

  @media (max-width: 768px) {
    position: absolute;
    top: 2%;
    left: 85%;
    color: white;
  }
  @media (max-width: 480px) {
    position: absolute;
    left: 88%;
    top: 1%;
    color: white;
  }
  img {
    @media (max-width: 480px) {
      width: 30px;
      height: 30px;
    }
  }
`;
export const HomePlantImg = styled.img`
  width: 100px;
  height: 100px;

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;
export const FarmDiv = styled.div`
  width: 100%;
  height: 60%;
`;

export const FieldDiv = styled.div`
  width: 100%;
  height: 50%;
  z-index: 300;

  @media (max-width: 768px) {
    height: 50%;
  }
`;
export const FieldImg = styled.img`
  width: 100%;
  height: 100%;
  z-index: 400;
`;

export const CharacterImg = styled.img`
  width: 300px;
  height: 300px;
  @media (max-width: 1024px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

export const GridImg = styled.img`
  width: 15rem;
  height: 10rem;

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

export const CommentLayout = styled.form`
  width: 100%;
  height: 50%;
  background-color: ${color.main};
  padding-top: 30px;
  h1 {
    text-align: center;
    @media (max-width: 1024px) {
      font-size: 1rem;
    }
  }
  font-family: "DOSPilgiMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/DOSPilgiMedium.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
`;
export const MobileFiledImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const MobileBtn = styled.button`
  margin-left: 10px;
  @media (max-width: 480px) {
    width: 20%;
    height: 1.2rem;
    font-size: 0.2rem;
  }
`;

export const GridLayout = styled.div`
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/asset/모달 농장.jpg");
  background-size: cover;

  @media (max-width: 768px) {
    height: 20rem;
  }
`;

export const GridDiv = styled.div`
  background-image: url("/asset/밭누끼.png");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  width: 250px;
  height: 250px;
  display: flex;
  margin-left: 100px;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    width: 50vw;
    height: 250px;
  }
`;
export const CommentDiv = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #b3933b;
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
export const CommentInput = styled.input`
  height: 40%;
  width: 60%;
  padding-left: 50px;
  font-size: 1.5rem;
  border: none;
  border-bottom: 1px solid ${color.main};
  outline-color: ${color.main};
  border-radius: 20px;
  margin-left: 10px;
  @media (max-width: 1024px) {
    width: 40%;
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    padding-left: 10px;
    font-size: 0.8rem;
  }
`;

export const CommentBtn = styled.button`
  @media (max-width: 768px) {
    width: 8rem;
    height: 30%;
    font-size: 0.8rem;
  }
  @media (max-width: 480px) {
    width: 4rem;
    height: 2rem;
    font-size: 0.1rem;
  }
  width: 10rem;
  height: 40%;
  margin-left: 20px;
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
    /* background: ${(props) => props.theme.pink}; */
    transform: translate(0, 0.25em);
    &::before {
      box-shadow: 0 0 0 2px, 0 0.5em 0 0;
      transform: translate3d(0, 0.5em, -1em);
    }
  }

  &:active {
    /* background: ${(props) => props.theme.pink}; */
    transform: translate(0em, 0.75em);
    &::before {
      box-shadow: 0 0 0 2px, 0 0;
      transform: translate3d(0, 0, -1em);
    }
  }
`;

export const CommentArea = styled.div`
  width: 100%;
  height: 50%;
  overflow-y: auto;
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
export const CommentList = styled.div`
  width: 80%;
`;
export const Comment = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    width: 60%;
  }
`;
export const Writer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  @media (max-width: 1024px) {
    width: 15%;
  }
`;
export const WriterInput = styled.input`
  width: 10%;
  height: 40%;
  padding-left: 20px;
  font-size: 1.5rem;
  border: none;
  border-bottom: 1px solid ${color.main};
  outline-color: ${color.main};
  border-radius: 20px;
  margin-left: 10px;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    padding-left: 10px;
    width: 15%;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
