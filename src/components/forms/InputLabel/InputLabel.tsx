import * as Styled from "./inputlabel.styled";

interface InputLabelProps {
  children: React.ReactNode;
}

export default function InputLabel({ children }: InputLabelProps) {
  return <Styled.InputLabelStyled>{children}</Styled.InputLabelStyled>;
}
