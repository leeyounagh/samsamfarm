import * as Styled from "./button.styled";

export default function Button({
  id,
  disabled = false,
  children,
  onClick,
  outline = false,
  cancel = false,
}) {
  return (
    <Styled.ButtonStyled
      id={id}
      disabled={disabled}
      onClick={onClick}
      outline={outline}
      cencel={cancel}
    >
      {children}
    </Styled.ButtonStyled>
  );
}
