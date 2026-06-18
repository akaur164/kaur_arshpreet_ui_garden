import styled from "styled-components";
import { TableHeaderProps } from "./TableHeader.types";

const StyledTh = styled.th<TableHeaderProps>`
  padding: 12px;
  background-color: ${(props) =>
    props.disabled ? "grey" : props.backgroundColor || "#f2f2f2"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export default function TableHeader({
  text = "Header",
  backgroundColor = "#f2f2f2",
  disabled = false,
}: TableHeaderProps) {
  return <StyledTh backgroundColor={backgroundColor} disabled={disabled}>{text}</StyledTh>;
}