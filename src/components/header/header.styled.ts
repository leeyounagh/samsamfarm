import styled from "styled-components";

export const Layout = styled.header`
  border: 1px solid black;
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const Logo = styled.img`
  width: 250px;
  margin-left: 10vh;
`;
export const NavBar = styled.div`
  margin-top: 2vw;
  margin-right: 7vw;
  cursor: pointer;
`;

export const LoginButtun = styled.button`
  padding: 10px 20px;
  margin-right: 30px;
  margin-bottom: 10px;
  background-color: rgb(166, 238, 163);
  color: #fff;
  border-radius: 4px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  text-decoration-line: none;
  &:hover {
    background-color: rgb(99, 230, 95);
  }
`;
