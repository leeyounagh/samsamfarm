import styled from "styled-components";
import color from "../../styles/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  width: 100%;
  height: 60rem;
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
`;
export const InnerContainer = styled.div`
  width: 40rem;
  height: 45rem;
  display: grid;
  justify-content: center;
  text-align: center;
  background-image: url("/asset/글올리기.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 50px;
  padding-top: 50px;
  @media screen and (max-width: 768px) {
    width: 30rem;
    height: 35rem;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 35rem;
  }
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
  border-radius: 30px;
  outline-color: ${color.main};
  opacity: 0.6;
  @media screen and (max-width: 768px) {
    width: 20rem;
    height: 40px;
  }
`;

export const ContentInput = styled.textarea`
  width: 500px;
  height: 300px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  border-radius: 30px;
  padding-left: 10px;
  outline-color: ${color.main};
  opacity: 0.6;
  @media screen and (max-width: 768px) {
    width: 20rem;
    height: 15rem;
  }
  @media screen and (max-width: 480px) {
    width: 20rem;
    height: 10rem;
  }
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
  border: 1px solid #b3933b;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  background-color: ${color.main};
  box-shadow: 0 0 0 1px ${color.main} inset,
    0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 ${color.main},
    0 8px 0 1px rgba(0, 0, 0, 0.4), 0 8px 8px 1px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: ${color.main};
  }

  &:active {
    top: 9px;
    box-shadow: 0 0 0 1px ${color.main} inset,
      0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 0 0 1px rgba(0, 0, 0, 0.4);
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 3.5rem;
  }
`;
