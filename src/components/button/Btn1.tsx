import styled from "styled-components";

const Slayout = styled.div`
  width: 100%;
  height: 50px;
`;

const SBtn1 = styled.button`
  cursor: pointer;
  overflow: hidden;
  font-weight: 600;
  color: #b3933b;
  text-transform: uppercase;
  padding: 1.25em 2em;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100%;
  height: 2rem;
  background: white;
  border: 2px solid;
  border-radius: 0.75em;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;

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
    font-size: 14px;
    width: 80%;
  }
`;
type Btn1Props = {
  title: string;
  onClick?: () => void; // onClick prop 추가
};
function Btn1({ title }: Btn1Props) {
  return (
    <Slayout>
      <SBtn1>{title}</SBtn1>
    </Slayout>
  );
}

export default Btn1;
