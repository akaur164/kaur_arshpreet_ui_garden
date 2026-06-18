import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) =>
    props.disabled ? "grey" : "white"};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export default function Table({
  disabled = false,
}: TableProps) {
  return (
    <StyledTable disabled={disabled}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Arshpreet</td>
          <td>Student</td>
        </tr>
      </tbody>
    </StyledTable>
  );
}