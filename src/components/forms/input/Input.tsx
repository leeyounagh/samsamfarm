import * as Styled from "./input.styled";

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  onKeyUp,
  name,
  disabled,
}) {
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
