import styled from "styled-components";

export const Nav = styled.nav<{ scrolled: boolean }>`
  height: fit-content;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ scrolled }) => (scrolled ? "yellow" : "white")};
  transition: background-color 0.15s ease-in-out;
  z-index: 150;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`;

export const NavMenu = styled.div`
  display: flex;
  gap: 1rem;
`;
export const Logo = styled.img`
  width: 230px;
  margin-left: 150px;

  @media screen and (max-width: 768px) {
    width: 130px;
    margin-left: 10px;
  }
`;

export const LoginButton = styled.button`
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
