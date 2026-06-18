import { render, screen } from "@testing-library/react";
import TableRow from "./TableRow";

test("TableRow is visible", () => {
  render(
    <table>
      <tbody>
        <TableRow />
      </tbody>
    </table>
  );
  expect(screen.getByText("Arshpreet")).toBeInTheDocument();
});

test("TableRow is grey when disabled", () => {
  render(
    <table>
      <tbody>
        <TableRow disabled />
      </tbody>
    </table>
  );
  expect(screen.getByText("Arshpreet").parentElement).toHaveStyle(
    "background-color: grey"
  );
});