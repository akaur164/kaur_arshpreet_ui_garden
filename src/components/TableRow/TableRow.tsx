import styled from "styled-components";
import { TableRowProps } from "./TableRow.types";

const StyledTr = styled.tr<TableRowProps>`
  background-color: ${(props) =>
    props.disabled ? "grey" : props.backgroundColor || "white"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export default function TableRow({
  children,
  disabled = false,
  backgroundColor = "white",
}: TableRowProps) {
  return (
    <StyledTr backgroundColor={backgroundColor} disabled={disabled}>
      {children || (
        <>
          <td>Arshpreet</td>
          <td>Student</td>
        </>
      )}
    </StyledTr>
  );
}