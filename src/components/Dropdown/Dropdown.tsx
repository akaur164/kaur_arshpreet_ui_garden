import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<DropdownProps>`
  padding: 10px;
  border-radius: 6px;
  background-color: ${(props) =>
    props.disabled ? "grey" : props.backgroundColor || "white"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export default function Dropdown({
  options = ["Option 1", "Option 2", "Option 3"],
  disabled = false,
  backgroundColor = "white",
}: DropdownProps) {
  return (
    <StyledSelect disabled={disabled} backgroundColor={backgroundColor}>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </StyledSelect>
  );
}