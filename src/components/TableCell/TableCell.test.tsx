import { render, screen } from "@testing-library/react";
import TableCell from "./TableCell";

test("TableCell is visible", () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell text="Student" />
        </tr>
      </tbody>
    </table>
  );
  expect(screen.getByText("Student")).toBeInTheDocument();
});

test("TableCell is grey when disabled", () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell text="Disabled Cell" disabled />
        </tr>
      </tbody>
    </table>
  );
  expect(screen.getByText("Disabled Cell")).toHaveStyle(
    "background-color: grey"
  );
});