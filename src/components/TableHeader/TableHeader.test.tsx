import { render, screen } from "@testing-library/react";
import TableHeader from "./TableHeader";

test("TableHeader is visible", () => {
  render(
    <table>
      <thead>
        <tr>
          <TableHeader text="Name" />
        </tr>
      </thead>
    </table>
  );

  expect(screen.getByText("Name")).toBeInTheDocument();
});

test("TableHeader is grey when disabled", () => {
  render(
    <table>
      <thead>
        <tr>
          <TableHeader text="Disabled Header" disabled />
        </tr>
      </thead>
    </table>
  );

  expect(screen.getByText("Disabled Header")).toHaveStyle(
    "background-color: grey"
  );
});