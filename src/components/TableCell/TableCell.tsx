import styled from "styled-components";
import { TableCellProps } from "./TableCell.types";

const StyledTd = styled.td<TableCellProps>`
  padding: 12px;
  border: 1px solid #ddd;
  background-color: ${(props) =>
    props.disabled ? "grey" : props.backgroundColor || "white"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export default function TableCell({
  text = "Cell",
  backgroundColor = "white",
  disabled = false,
}: TableCellProps) {
  return (
    <StyledTd backgroundColor={backgroundColor} disabled={disabled}>
      {text}
    </StyledTd>
  );
}