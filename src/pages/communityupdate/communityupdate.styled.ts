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

// export const SubmitButton = styled.button`
//   width: 150px;
//   height: 40px;
//   background-color: #e6b619;
//   color: #fff;
//   font-size: 16px;
//   font-weight: bold;
//   border-radius: 5px;
//   border: none;
//   cursor: pointer;
//   &:hover {
//     background-color: #b48a01;
//   }
// `;

export const SubmitButton = styled.button`
  position: relative;
  display: inline-block;
  font-size: 22px;
  padding: 20px 60px;
  color: white;
  margin: 20px 10px 10px;
  border: 1px solid #000;
  border-radius: 6px;
  text-align: center;
  transition: top 0.01s linear;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  background-color: #e6b619;
  box-shadow: 0 0 0 1px #e6b619 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 8px 0 0 #e6b619, 0 8px 0 1px rgba(0, 0, 0, 0.4),
    0 8px 8px 1px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #e6b619;
  }

  &:active {
    top: 9px;
    box-shadow: 0 0 0 1px #e6b619 inset,
      0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 0 0 1px rgba(0, 0, 0, 0.4);
  }
`;
