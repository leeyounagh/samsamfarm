import * as Styled from "./btn1.styled";

type Btn1Props = {
  title: string;
  onClick?: () => void; // onClick prop 추가
};
function Btn1({ title, onClick }: Btn1Props) {
  return (
    <Styled.layout>
      <Styled.Btn1 onClick={onClick}>{title}</Styled.Btn1>
    </Styled.layout>
  );
}

export default Btn1;
