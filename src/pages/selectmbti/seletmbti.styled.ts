import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const InnerLayout = styled.div`
  width: 60rem;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 0px 20px 0px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

export const CharacterDiv = styled.div`
  width: 13rem;
  height: 8rem;
  display: grid;
  justify-content: center;
  margin: 10px 0px 10px 0px;

  h2 {
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin: 10px;
  }
`;

export const CharacterImg = styled.img`
  width: 10rem;
  height: 10rem;

  @media (max-width: 768px) {
    width: 8rem;
    height: 8rem;
  }
`;

export const SelectDiv = styled.div`
  border: 1px solid #e3d78d;
  background-color: white;
  width: 13rem;
  height: 13rem;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    width: 8rem;
    height: 8rem;
  }
`;
