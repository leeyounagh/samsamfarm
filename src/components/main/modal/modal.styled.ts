import styled from "styled-components";

export const Layout = styled.div`
  width: 70rem;
  height: 90vh;
  z-index: 100;
  border: 1px solid lightgray;
  background: white;
  position: absolute;
  top: -160px;
  left: 15%;
`;

export const CloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  cursor: pointer;
  padding-top: 30px;
`;
export const FarmDiv = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
`;

export const FarmModalDiv = styled.div`
  width: 80%;
  height: 100%;
  background-image: url("./asset/모바일배경.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const CharacterImg = styled.img`
  margin-left: 10%;
  margin-top: 5%;
`;

export const GridImg = styled.img`
  width: 25%;
  height: 25%;

  position: absolute;

  top: 37%;
  left: 53%;
`;

export const PlantImg = styled.img`
  position: absolute;
  top: 40%;
  left: 70%;
`;

export const PaymentImg = styled.img`
  position: absolute;
  top: 28%;
  left: 80%;
`;

export const CommentDiv = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 30%;
`;
export const CommentInputDiv = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
`;

export const CommentInput = styled.input`
  border: 1px solid lightgray;
  &:focus {
    outline: none;
  }
  height: 70%;
  width: 80%;
  margin-left: 50px;
  font-size: 1.5rem;
  padding-left: 10px;
`;

export const CommentBtn = styled.button`
  width: 8%;
  height: 80%;
  margin-left: 10px;
`;

export const CommentAreaDiv = styled.div`
  width: 90%;
  height: 21vh;
  overflow-y: auto;
  position: absolute;
  top: 75%;
  left: 4%;
  padding-top: 10px;
`;
export const CommentListDiv = styled.div`
  border-bottom: 1px solid lightgray;
  width: 80%;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CommentUserDiv = styled.div`
  border-bottom: 1px solid lightgray;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HomePlantImg = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 40%;
  left: 64%;
`;

export const HomeTitleDiv = styled.div`
  width: 100%;
  position: absolute;
  top: 31%;
  left: 53%;
  font-size: 1.3rem;
`;
