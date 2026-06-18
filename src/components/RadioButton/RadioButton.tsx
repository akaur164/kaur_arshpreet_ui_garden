import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const Wrapper = styled.label<RadioButtonProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background-color: ${(props) =>
    props.disabled ? "grey" : props.backgroundColor || "transparent"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export default function RadioButton({
  label = "Radio Option",
  name = "radio",
  disabled = false,
  backgroundColor,
}: RadioButtonProps) {
  return (
    <Wrapper disabled={disabled} backgroundColor={backgroundColor}>
      <input type="radio" name={name} disabled={disabled} />
      {label}
    </Wrapper>
  );
}