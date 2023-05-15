import styled from "styled-components";
import color from "../../styles/color";
export const Nav = styled.nav<{ scrolled: boolean }>`
  height: fit-content;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ scrolled }) => (scrolled ? `${color.main}` : "white")};
  transition: background-color 0.15s ease-in-out;
  z-index: 100;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`;

export const NavMenu = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
export const Logo = styled.img`
  width: 230px;
  margin-left: 150px;

  @media screen and (max-width: 768px) {
    width: 130px;
    margin-left: 10px;
  }
`;

export const MusicPlay = styled.div`
  .icon {
    font-size: 32px;
    color: #b3933b;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const LoginButton = styled.button`
  cursor: pointer;
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
    transform: translate(0, 0.25em);
    &::before {
      box-shadow: 0 0 0 2px, 0 0.5em 0 0;
      transform: translate3d(0, 0.5em, -1em);
    }
  }

  &:active {
    transform: translate(0em, 0.75em);
    &::before {
      box-shadow: 0 0 0 2px, 0 0;
      transform: translate3d(0, 0, -1em);
    }
  }
  @media (max-width: 768px) {
    padding: 1em 1.5em;
    height: 40px;
    font-size: 14px;
  }
`;
