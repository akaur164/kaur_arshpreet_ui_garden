import styled from "styled-components";
import { TableFooterProps } from "./TableFooter.types";

const StyledFooter = styled.tfoot<TableFooterProps>`
  background-color: ${(props) =>
    props.disabled ? "grey" : props.backgroundColor || "#f2f2f2"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export default function TableFooter({
  text = "Table Footer",
  backgroundColor = "#f2f2f2",
  disabled = false,
}: TableFooterProps) {
  return (
    <StyledFooter backgroundColor={backgroundColor} disabled={disabled}>
      <tr>
        <td colSpan={2}>{text}</td>
      </tr>
    </StyledFooter>
  );
}