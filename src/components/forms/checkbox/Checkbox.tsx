import * as Styled from "./checkbox.styled";

interface CheckboxProps {
  id?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  name?: string;
  value?: string;
}

export default function Checkbox({
  id,
  disabled = false,
  children,
  onChange,
  checked = false,
  name,
  value,
}: CheckboxProps) {
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
      {children && <span>{children}</span>}
    </Styled.CheckboxStyled>
  );
}
