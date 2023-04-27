import styled from "styled-components";

export const Layout = styled.div`
  width: 70%;
  height: 90vh;
  z-index: 100;
  border: 1px solid lightgray;
  background: white;
  position: absolute;
  top: -150px;
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
  border: 1px solid black;
  width: 100%;
  height: 50%;
  margin-top: 50px;
`;

export const FarmModalDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("./asset/모바일배경.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;
export const BearImg = styled.img`
  margin-left: 10%;
  margin-top: 5%;
`;

export const GridImg = styled.img`
  width: 25%;
  height: 25%;

  position: absolute;

  top: 35%;
  left: 55%;
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
