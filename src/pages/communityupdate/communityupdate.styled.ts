import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

export const TitleInput = styled.input`
  width: 500px;
  height: 40px;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const ContentInput = styled.textarea`
  width: 500px;
  height: 300px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #e6b619;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #b48a01;
  }
`;
