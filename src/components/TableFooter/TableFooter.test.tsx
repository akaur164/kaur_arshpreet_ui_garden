import { render, screen } from "@testing-library/react";
import TableFooter from "./TableFooter";

test("TableFooter is visible", () => {
  render(
    <table>
      <TableFooter text="Total Students: 1" />
    </table>
  );
  expect(screen.getByText("Total Students: 1")).toBeInTheDocument();
});

test("TableFooter is grey when disabled", () => {
  render(
    <table>
      <TableFooter text="Disabled Footer" disabled />
    </table>
  );
  expect(screen.getByText("Disabled Footer").parentElement?.parentElement).toHaveStyle(
    "background-color: grey"
  );
});