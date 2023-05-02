import * as Styled from "./input.styled";

interface InputProps {
  type?: "text" | "number" | "password";
  placeholder?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  name?: string;
  disabled?: boolean;
}

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  onKeyUp,
  name,
  disabled,
}: InputProps) {
  return (
    <Styled.InputStyled
      type={type}
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      disabled={disabled}
      onKeyUp={onKeyUp}
    />
  );
}
