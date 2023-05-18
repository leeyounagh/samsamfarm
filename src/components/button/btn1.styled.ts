import styled from "styled-components";

export const layout = styled.div`
  width: 100%;
`;

export const Btn1 = styled.button`
  cursor: pointer;
  font-weight: 600;
  width: 100%;
  color: #b3933b;
  white-space: nowrap;
  text-transform: uppercase;
  /* padding: 1.25em; */
  margin-bottom: 10px;
  height: 30px;
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
  @media (max-width: 1024px) {
    font-size: 10px;
    width: 80%;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
    width: 100%;
    margin: 0;
  }
`;
