import * as Styled from "./checkbox.styled";

export default function Checkbox({
  id,
  disabled = false,
  children,
  onChange,
  checked = false,
  name,
  value,
}) {
  return (
    <Styled.CheckboxStyled>
      <input
        type="checkbox"
        id={id}
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        value={value}
      />
      <span>{children}</span>
    </Styled.CheckboxStyled>
  );
}
