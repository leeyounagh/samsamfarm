import * as Styled from "./button.styled";

type ButtonProps = {
  id: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
  outline?: boolean;
  cancel?: boolean;
};

export default function Button({
  id,
  disabled = false,
  children,
  onClick,
  outline = false,
  cancel = false,
}: ButtonProps) {
  return (
    <Styled.ButtonStyled
      id={id}
      disabled={disabled}
      onClick={onClick}
      outline={outline}
      cancel={cancel}
    >
      {children}
    </Styled.ButtonStyled>
  );
}
