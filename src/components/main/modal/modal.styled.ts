import styled from "styled-components";
import color from "../../../styles/color";

export const Layout = styled.div`
  width: 65vw;
  height: 83vh;
  margin-top: 50px;
  z-index: 400;
  background: white;
  border: 1px solid lightgray;
  position: fixed;
  top: 5rem;
  left: 20rem;
  font-family: "DOSPilgiMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/DOSPilgiMedium.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
  @media (max-width: 768px) {
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
  width: 100%;
  padding-top: 30px;
  z-index: 50;
  position: absolute;
  left: 95%;
  top: 1%;

  @media (max-width: 768px) {
    /* position: absolute;
    top: -10px;
    left: 90%; */
    color: white;
  }
  @media (max-width: 480px) {
    position: absolute;
    left: 90%;
    color: white;
  }
`;
export const HomePlantImg = styled.img`
  width: 100px;
  height: 100px;

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
  width: 100%;
  height: 50%;
  z-index: 300;

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
  width: 300px;
  height: 300px;
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

export const CommentLayout = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${color.main};
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
  background-image: url("./asset/모달 농장.jpg");
  background-size: cover;
`;

export const GridDiv = styled.div`
  background-image: url("./asset/밭누끼.png");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  width: 250px;
  height: 250px;
  display: flex;
  margin-left: 100px;
  justify-content: center;
  align-items: center;
`;
export const CommentDiv = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${color.main};
`;
export const CommentInput = styled.input`
  height: 60%;
  width: 80%;
  padding-left: 50px;
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid ${color.main};
  outline-color: ${color.main};
  border-radius: 20px;
  margin-left: 10px;
`;

export const CommentBtn = styled.button`
  width: 10rem;
  height: 80%;
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
`;
export const CommentList = styled.div`
  width: 80%;
`;
export const Comment = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Writer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
